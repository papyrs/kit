import type {SyncState} from '@deckdeckgo/editor';
import {syncBeforeUnload, syncSubscribe} from '@deckdeckgo/sync';
import {readable} from 'svelte/store';

interface SyncStore {
  sync: SyncState;
  dirty: boolean;
}

const initSyncStore: SyncStore = {
  sync: 'idle',
  dirty: false
};

/**
 * If a new user sign-in, new canisters will be created by @papyrs/ic
 */
const start = (set) => {
  let subscriber: () => void | undefined = undefined;

  subscriber = syncSubscribe((syncState: SyncState) => {
    const dirty: boolean = ['pending', 'in_progress', 'init'].includes(syncState);

    set({sync: syncState, dirty});

    syncBeforeUnload(dirty);
  });

  return function stop() {
    subscriber?.();
    set(initSyncStore);
  };
};

export const sync = readable<SyncStore>(initSyncStore, start);
