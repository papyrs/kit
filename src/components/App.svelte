<script lang="ts">
  import { Toasts } from "@papyrs/ui";
  import { initSync } from "@deckdeckgo/sync";
  import { onMount, onDestroy } from "svelte";
  import { initAuth } from "../services/auth.services";
  import { cloudConfig } from "../utils/env.utils";

  let destroyListener: (() => void)[] | undefined = undefined;

  onMount(async () => {
    destroyListener = initSync({
      env: {
        cloud: cloudConfig(),
        jszip: undefined,
      },
    });

    await initAuth();
  });

  onDestroy(() =>
    destroyListener?.forEach((unsubscribe: () => void) => unsubscribe())
  );
</script>

<Toasts />
