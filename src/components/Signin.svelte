<script lang="ts">
  import {toastsError} from '../stores/toasts.store';

  const proxyUrl = import.meta.env.PUBLIC_SIGN_IN_PROXY_URL;

  const onSignInError = (err?: string) =>
    toastsError({
      text: 'Something went wrong while sign-in.',
      detail: err
    });
</script>

<ic-signin-sso sign-in-proxy-url={proxyUrl} on:signInError={onSignInError} />

<style>
  ic-signin-sso::part(object) {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
