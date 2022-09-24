<script lang="ts">
  import {
    Toolbar,
    IconChatBubbleOutline,
    IconThumbUp,
    IconShare,
    Modal,
    Toasts
  } from "@papyrs/ui";
  import { share } from "../services/share.services";
  import Signin from "./Signin.svelte";
  
  let open = false;
</script>

<Toolbar>
  <button class="icon" on:click={() => (open = true)}><IconThumbUp /></button>
  <button class="icon like"><IconChatBubbleOutline /></button>
  <button class="icon" aria-label="Share" on:click={share}><IconShare /></button
  >
</Toolbar>

{#if open}
  <Modal on:papyClose={() => (open = false)}>
    <Signin />
  </Modal>
{/if}

<Toasts />

<style lang="scss">
  button {
    height: 100%;
    padding: 0.45rem 0.75rem;
  }

  .like {
    padding-top: 0.85rem;
  }

  :global(div.modal) {
    --modal-content-padding: 0 0 0 0.45rem;
  }
  
</style>
