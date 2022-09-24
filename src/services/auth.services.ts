import { initAuth as initAuthSync } from "@deckdeckgo/sync";
import { toastsError } from "../stores/toasts.store";
import { icConfig } from "../utils/env.utils";

export const initAuth = async () => {
  try {
    await initAuthSync(icConfig());
  } catch (err: unknown) {
    toastsError({
      text: "Something went wrong while initializing the authentication.",
      detail: err,
    });
  }
};
