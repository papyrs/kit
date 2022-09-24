<script lang="ts">
  import {
    Toolbar,
    IconChatBubbleOutline,
    IconThumbUp,
    IconShare,
    Modal,
  } from "@papyrs/ui";
  import { share } from "../services/share.services";

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
    <slot name="signin" />
  </Modal>
{/if}

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
