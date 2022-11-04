<script lang="ts">
  import { Popover, Button, Avatar, IconSync, IconNew } from "@papyrs/ui";
  import { user } from "../stores/user.store";
  import { signUserOut } from "../services/auth.services";
  import { IconSignOut } from "@papyrs/ui";
  import { dirty } from "../stores/dirty.derived";
  import Dirty from "./Dirty.svelte";
  import { auth } from "../stores/auth.store";

  let visible: boolean | undefined;
  let button: HTMLButtonElement | undefined;

  const signOut = async () => {
    await signUserOut();

    visible = false;
  };
</script>

{#if $auth.authUser !== null}
  <Button on:click={() => (visible = true)} bind:button>
    <svelte:fragment slot="icon">
      {#if $auth.loggedIn}
        <Avatar photoUrl={$user?.photoUrl} alt="Profile image" slot="icon" />
      {:else}
        <IconSync />
      {/if}
    </svelte:fragment>

    {$auth.loggedIn ? $user?.name ?? "User" : "Syncing cloud"}
  </Button>
{/if}

<Popover bind:visible anchor={button} direction="rtl">
  {#if $dirty}
    <Dirty />
  {:else}
    <a
      href="https://app.papy.rs"
      class="menu"
      aria-haspopup="menu"
      rel="noopener norefferer"
    >
      <IconNew />
      <span>Write a post</span>
    </a>

    <button
      type="button"
      role="menuitem"
      aria-haspopup="menu"
      on:click={async () => await signOut()}
      class="menu"
    >
      <IconSignOut />
      <span>Sign out</span>
    </button>
  {/if}
</Popover>
