import { writable } from "svelte/store";

export const ready = writable<boolean>(false);
export const processing = writable<boolean>(false);
