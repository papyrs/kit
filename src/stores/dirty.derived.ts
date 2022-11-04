import { derived } from "svelte/store";
import { processing } from "./app.store";
import { sync } from "./sync.store";

export const dirty = derived(
  [processing, sync],
  ([processing, { dirty }]) => processing || dirty
);
