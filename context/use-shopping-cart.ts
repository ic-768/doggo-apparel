import { useContext } from "react";
import { ShoppingCartContext } from "./shopping-cart";
import { ShoppingCartContextType } from "./shopping-cart";

export const useShoppingCart = (): ShoppingCartContextType => {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider",
    );
  }

  return context;
};
