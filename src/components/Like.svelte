<script lang="ts">
  import { IconThumbUp, Spinner } from "@papyrs/ui";
  import { createEventDispatcher, onMount } from "svelte";
  import { auth } from "../stores/auth.store";
  import { fade, fly } from "svelte/transition";
  import {
    countLikes as countLikesService,
    getLike,
    likeDislike,
  } from "../services/like.services";
  import type { Interaction } from "@deckdeckgo/editor";

  const dispatch = createEventDispatcher();

  let processing = false;
  let likeAnimation: undefined | "+1" | "-1" = undefined;

  let countLikes: bigint | undefined = undefined;
  let like: Interaction | undefined;

  const cloudParams = {
    docId: import.meta.env.PUBLIC_VITE_IC_DOC_ID,
    canisterId: import.meta.env.PUBLIC_VITE_IC_DATA_CANISTER_ID,
  };

  onMount(async () => {
    try {
      const [count, userLike] = await Promise.all([
        countLikesService(cloudParams),
        getLike(cloudParams),
      ]);

      countLikes = count;
      like = userLike;

      console.log(countLikes, userLike);
    } catch (err) {
      // TODO: error
      console.error(err);
    }
  });

  const onClick = async () => {
    if (!$auth.loggedIn) {
      dispatch("papySignIn");
      return;
    }

    processing = true;

    try {
      await likeDislike({...cloudParams, like});
    } catch (err) {
      // TODO: error
      console.error(err);
    }

    setTimeout(() => {
      processing = false;
      likeAnimation = "+1";

      setTimeout(() => (likeAnimation = undefined), 1500);
    }, 2000);
  };
</script>

<div>
  <button
    class="icon"
    on:click={onClick}
    aria-label="Like the article"
    disabled={processing || countLikes === undefined}
  >
    {#if processing}
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
