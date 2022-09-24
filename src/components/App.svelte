<script lang="ts">
  import { Toasts } from "@papyrs/ui";
  import { onMount } from "svelte";
  import { initAuth } from "../services/auth.services";

  onMount(async () => await initAuth());
</script>

<Toasts />
