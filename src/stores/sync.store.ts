import { writable } from "svelte/store";

export const dirty = writable<boolean>(false);
