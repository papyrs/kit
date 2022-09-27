<script lang="ts">
  import { IconThumbUp, Spinner } from "@papyrs/ui";
  import { createEventDispatcher } from "svelte";
  import { auth } from "../stores/auth.store";

  const dispatch = createEventDispatcher();

  let processing = false;

  const onClick = () => {
    if (!$auth.loggedIn) {
      dispatch("papySignIn");
      return;
    }

    processing = true;
  };
</script>

<button
  class="icon"
  on:click={onClick}
  aria-label="Like the article"
  disabled={processing}
>
  {#if processing}
    <Spinner />
  {:else}
    <IconThumbUp />
  {/if}
</button>

<style lang="scss">
  button {
    position: relative;
    width: 100%;

    --spinner-size: 20px;
    --spinner-border-size: 2px;
    --spinner-margin: 0.05rem 0 0;
  }
</style>
