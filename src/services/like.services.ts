import { cloudProvider } from "../utils/providers.utils";
import type { Interaction } from "@deckdeckgo/editor";
import type { InteractionCloudPrams } from "../types/interaction.types";
import { interactionParams } from "../utils/env.utils";

export const countLikes = async (): Promise<bigint> => {
  const { countLikes } = await cloudProvider<{
    countLikes: (params: InteractionCloudPrams) => Promise<bigint>;
  }>();

  const { docId, canisterId } = interactionParams();

  console.log('here', docId, canisterId)

  return countLikes({
    key: "docs",
    id: docId,
    canisterId,
  });
};

export const getLike = async (): Promise<Interaction | undefined> => {
  const { getLike } = await cloudProvider<{
    getLike: (
      params: InteractionCloudPrams
    ) => Promise<Interaction | undefined>;
  }>();

  const { docId, canisterId } = interactionParams();

  return getLike({
    key: "docs",
    id: docId,
    canisterId,
  });
};

export const likeDislike = async ({
  like,
}: {
  like: Interaction | undefined;
}): Promise<Interaction> => {
  const { likeDislike: likeProvider } = await cloudProvider<{
    likeDislike: (
      params: InteractionCloudPrams & {
        like: Interaction | undefined;
      }
    ) => Promise<Interaction>;
  }>();

  const { docId, canisterId } = interactionParams();

  return likeProvider({
    key: "docs",
    id: docId,
    canisterId,
    like,
  });
};
