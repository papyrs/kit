<script lang="ts">
  import { IconThumbUp, Spinner } from "@papyrs/ui";
  import { createEventDispatcher } from "svelte";
  import { auth } from "../stores/auth.store";
  import { fade, fly } from "svelte/transition";
  import {
    countLikes as countLikesService,
    getLike,
    likeDislike,
  } from "../services/like.services";
  import type { Interaction } from "@deckdeckgo/editor";
  import { processing, ready } from "../stores/app.store";
  import { toastsError } from "../stores/toasts.store";
  import { dirty } from "../stores/dirty.derived";
  import { interactionParams, isBrowser } from "../utils/env.utils";
  import { InteractionPrams } from "../types/interaction.types";

  const dispatch = createEventDispatcher();

  let likeAnimation: undefined | string = undefined;

  let countLikes: bigint | undefined = undefined;
  let like: Interaction | undefined;

  let cloudParams: Partial<InteractionPrams> | undefined;

  const init = async () => {
    if (!$ready || !isBrowser) {
      return;
    }

    cloudParams = interactionParams();

    if (
      cloudParams.docId === undefined ||
      cloudParams.canisterId === undefined
    ) {
      return;
    }

    try {
      const [count, userLike] = await Promise.all([
        countLikesService(cloudParams as InteractionPrams),
        getLike(cloudParams as InteractionPrams),
      ]);

      countLikes = count;
      like = userLike;
    } catch (err) {
      console.error(err);
      toastsError({
        text: "Something went wrong while fetching the information about the likes.",
        detail: err,
      });
    }
  };

  const reload = async () => {
    if (!$auth.loggedIn) {
      // it's a sign-out
      if ($ready) {
        like = undefined;
      }

      return;
    }

    await init();
  };

  $: $ready, (async () => await init())();
  $: $auth, (async () => await reload())();

  const animateLike = () => {
    likeAnimation = `${like?.data.like === true ? "+" : "-"}1`;
    setTimeout(() => (likeAnimation = undefined), 1500);
  };

  const onClick = async () => {
    if (!$auth.loggedIn) {
      dispatch("papySignIn");
      return;
    }

    if (!$ready || !isBrowser) {
      return;
    }

    processing.set(true);

    try {
      like = {
        ...(await likeDislike({ like, ...(cloudParams as InteractionPrams) })),
      };

      processing.set(false);

      animateLike();
    } catch (err) {
      processing.set(false);

      console.error(err);
      toastsError({
        text: "Something went wrong while registering your like.",
        detail: err,
      });
    }
  };
</script>

<svelte:window on:blogDataReady={init} />

<div>
  <button
    class="icon"
    on:click={onClick}
    aria-label={like?.data.like === true ? "Remove given like" : "Like"}
    disabled={$dirty || countLikes === undefined}
  >
    {#if $processing}
      <Spinner />
    {:else}
      <IconThumbUp fill={like?.data.like === true} />
    {/if}
  </button>

  {#if likeAnimation !== undefined}
    <p in:fly={{ y: 10, duration: 1000 }} out:fade>{likeAnimation}</p>
  {/if}
</div>

<style lang="scss">
  div {
    position: relative;
  }

  button {
    position: relative;
    width: 100%;

    --spinner-size: 20px;
    --spinner-border-size: 2px;
    --spinner-margin: 0.05rem 0 0;

    height: 100%;
    padding: 0.45rem 0.75rem;
  }

  p {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translate(-50%, 0);
  }
</style>
