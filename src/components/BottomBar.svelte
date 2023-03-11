<script lang="ts">
  import { BottomBar, IconShare, Modal } from "@papyrs/ui";
  import { share } from "../services/share.services";
  import Like from "./Like.svelte";
  import Signin from "./Signin.svelte";

  let openSignIn = false;
</script>

<BottomBar columns={1}>
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

  :global(div.modal div.wrapper.flex) {
    background: linear-gradient(
      135deg,
      #ffeed6 20%,
      #d5ffef 20%,
      #d5ffef 40%,
      #c4cdff 40%,
      #c4cdff 60%,
      #ffd5f7 60%,
      #ffd5f7 80%,
      #ffcece 80%,
      #ffcece
    );
  }
</style>
