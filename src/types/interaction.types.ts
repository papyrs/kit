export type InteractionPrams = {
  docId: string;
  canisterId: string;
};
export type InteractionCloudPrams = Pick<InteractionPrams, "canisterId"> & {
  key: "docs";
  id: string;
};
