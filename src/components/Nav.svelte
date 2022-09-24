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
