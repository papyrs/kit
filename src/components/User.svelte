<script lang="ts">
  import { Popover, Button, Avatar } from "@papyrs/ui";
  import { user } from "../stores/user.store";
  import { signUserOut } from "../services/auth.services";
  import { IconSignOut, IconMore } from "@papyrs/ui";
  import { dirty } from "../stores/sync.store";
  import Dirty from "./Dirty.svelte";
  import { auth } from "../stores/auth.store";

  let visible: boolean | undefined;
  let button: HTMLButtonElement | undefined;

  const signOut = async () => {
    await signUserOut();

    visible = false;
  };
</script>

<Button on:click={() => (visible = true)} bind:button>
  <Avatar photoUrl={$user.photoUrl} alt="Profile image" slot="icon" />

  {$user?.name ?? "User"}
</Button>

<Popover bind:visible anchor={button} direction="rtl">
  {#if $dirty}
    <Dirty />
  {:else}
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
