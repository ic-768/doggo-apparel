import { use } from "react";

import { useClient } from "@/hooks/useClient";

import { ShoppingCartContext, ShoppingCartContextType } from "./shopping-cart";

export const useShoppingCart = (): ShoppingCartContextType => {
  const context = use(ShoppingCartContext);

  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider",
    );
  }

  // so that on the very first render, we get null to match the server
  // this can't happen on the context level, has to be component level
  const isClient = useClient();

  return isClient ? context : { ...context, cart: null };
};
