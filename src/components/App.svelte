<script lang="ts">
  import { Toasts } from "@papyrs/ui";
  import { initSync } from "@deckdeckgo/sync";
  import { onMount, onDestroy } from "svelte";
  import { initAuth } from "../services/auth.services";
  import { cloudConfig } from "../utils/env.utils";
  import Nav from "./Nav.svelte";
  import BottomBar from "./BottomBar.svelte";
  import {ready} from "../stores/app.store";

  export let bottomBar: boolean = false;

  let destroyListener: (() => void)[] | undefined = undefined;

  onMount(async () => {
    destroyListener = initSync({
      env: {
        cloud: cloudConfig(),
        jszip: undefined,
      },
    });

    await initAuth();

    ready.set(true);
  });

  onDestroy(() =>
    destroyListener?.forEach((unsubscribe: () => void) => unsubscribe())
  );
</script>

<svelte:window on:papySignIn={async () => await initAuth()} />

<Nav />

{#if bottomBar}
  <BottomBar />
{/if}

<Toasts />
