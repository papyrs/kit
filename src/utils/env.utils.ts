import type {EnvironmentCdn, EnvironmentCloud} from '@deckdeckgo/sync';

export const isBrowser = typeof window !== "undefined";

export const icConfig = (): Record<string, string | boolean> => {
  const managerCanisterId: string = import.meta.env
    .PUBLIC_VITE_IC_MANAGER_CANISTER_ID as string;
  const localIdentityCanisterId: string | null | undefined = import.meta.env
    .PUBLIC_VITE_IC_LOCAL_IDENTITY_CANISTER_ID as string | null | undefined;

  return {
    managerCanisterId,
    author: "Papyrs",
    ...(localIdentityCanisterId && { localIdentityCanisterId }),
  };
};

export const cloudConfig = (): EnvironmentCloud | undefined => {
  return {
    api: {
      cdn: import.meta.env.PUBLIC_VITE_CLOUD_API_CDN as string
    },
    signIn: {
      tag: `ic-signin-sso`,
      cdn: import.meta.env.VITE_CLOUD_SIGN_IN_CDN as string
    }
  };
};