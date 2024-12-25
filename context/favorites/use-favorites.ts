import { use } from "react";

import { useClient } from "@/hooks/useClient";

import { FavoritesContext, FavoritesContextType } from "./favorites";

export const useFavorites = (): FavoritesContextType => {
  const context = use(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  // so that on the very first render, we get null to match the server
  // this can't happen on the context level, has to be component level
  const isClient = useClient();

  return isClient ? context : { ...context, favorites: null };
};
