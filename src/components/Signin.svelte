<script lang="ts">
  import { toastsError } from "../stores/toasts.store";
  import { initAuth } from "../services/auth.services";
  import { createEventDispatcher } from 'svelte';

  const proxyUrl = import.meta.env.PUBLIC_VITE_SIGN_IN_PROXY_URL;

  const dispatch = createEventDispatcher();

  const onSignInSuccess = async () => {
      await initAuth();

      dispatch('papySignInSuccess');
  }

  const onSignInError = (err?: string) =>
    toastsError({
      text: "Something went wrong while sign-in.",
      detail: err,
    });
</script>

<ic-signin-sso
  sign-in-proxy-url={proxyUrl}
  on:signInError={onSignInError}
  on:signInSuccess={onSignInSuccess}
/>

<style>
  ic-signin-sso::part(object) {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
