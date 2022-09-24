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
