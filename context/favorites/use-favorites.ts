import { use } from "react";

import { FavoritesContext, FavoritesContextType } from "./favorites";

export const useFavorites = (): FavoritesContextType => {
  const context = use(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
};
