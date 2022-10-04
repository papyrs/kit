<script lang="ts">
  import { BottomBar, IconChatBubbleOutline, IconShare, Modal } from "@papyrs/ui";
  import { share } from "../services/share.services";
  import Like from "./Like.svelte";
  import Signin from "./Signin.svelte";

  let openSignIn = false;
</script>

<BottomBar>
  <Like on:papySignIn={() => openSignIn = true} />
  <button class="icon like"><IconChatBubbleOutline /></button>
  <button class="icon" aria-label="Share" on:click={share}><IconShare /></button
  >
</BottomBar>

{#if openSignIn}
  <Modal on:papyClose={() => (openSignIn = false)}>
    <Signin on:papySignInSuccess={() => (openSignIn = false)} />
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
