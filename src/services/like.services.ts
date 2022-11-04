import { cloudProvider } from "../utils/providers.utils";
import type { Interaction } from "@deckdeckgo/editor";
import {
  InteractionCloudPrams,
  InteractionPrams,
} from "../types/interaction.types";

export const countLikes = async ({
  docId,
  canisterId,
}: InteractionPrams): Promise<bigint> => {
  const { countLikes } = await cloudProvider<{
    countLikes: (params: InteractionCloudPrams) => Promise<bigint>;
  }>();

  return countLikes({
    key: "docs",
    id: docId,
    canisterId,
  });
};

export const getLike = async ({
  docId,
  canisterId,
}: InteractionPrams): Promise<Interaction | undefined> => {
  const { getLike } = await cloudProvider<{
    getLike: (
      params: InteractionCloudPrams
    ) => Promise<Interaction | undefined>;
  }>();

  return getLike({
    key: "docs",
    id: docId,
    canisterId,
  });
};

export const likeDislike = async ({
  docId,
  canisterId,
  like,
}: InteractionPrams & {
  like: Interaction | undefined;
}): Promise<Interaction> => {
  const { likeDislike: likeProvider } = await cloudProvider<{
    likeDislike: (
      params: InteractionCloudPrams & {
        like: Interaction | undefined;
      }
    ) => Promise<Interaction>;
  }>();

  return likeProvider({
    key: "docs",
    id: docId,
    canisterId,
    like,
  });
};
