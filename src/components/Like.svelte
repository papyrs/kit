<script lang="ts">
  import { IconThumbUp, Spinner } from "@papyrs/ui";
  import { createEventDispatcher } from "svelte";
  import { auth } from "../stores/auth.store";
  import { fade, fly } from "svelte/transition";

  const dispatch = createEventDispatcher();

  let processing = false;
  let liked = false;
  let likeAnimation: undefined | "+1" | "-1" = undefined;

  const onClick = () => {
    if (!$auth.loggedIn) {
      dispatch("papySignIn");
      return;
    }

    processing = true;

    setTimeout(() => {
      liked = true;
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
    disabled={processing}
  >
    {#if processing}
      <Spinner />
    {:else}
      <IconThumbUp fill={liked} />
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
  }

  p {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translate(-50%, 0);
  }
</style>
