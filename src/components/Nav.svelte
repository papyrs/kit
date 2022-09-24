<script lang="ts">
  import Menu from "./Menu.svelte";
  import User from "./User.svelte";
  import { auth } from "../stores/auth.store";
</script>

<nav>
  <Menu />

  {#if $auth.loggedIn}
    <User />
  {/if}
</nav>

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;

    pointer-events: none;

    :global(*) {
      pointer-events: auto;
    }
  }
</style>
