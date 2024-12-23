import { use } from "react";

import { ShoppingCartContext, ShoppingCartContextType } from "./shopping-cart";

export const useShoppingCart = (): ShoppingCartContextType => {
  const context = use(ShoppingCartContext);

  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider",
    );
  }

  return context;
};
