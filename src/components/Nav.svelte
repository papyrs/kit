<script lang="ts">
  import Menu from "./Menu.svelte";
  import User from "./User.svelte";
</script>

<nav>
  <Menu />

  <User />
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
