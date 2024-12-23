"use client";
import { useShoppingCart } from "@/context/cart/use-shopping-cart";
import { getClothingItemById } from "@/lib/utils";

import CartIndicator from "../../ui/indicators/cart-indicator";

export default function CartButton({ id }: { id: number }) {
  const { addToCart } = useShoppingCart();

  const onClick = () => {
    const item = getClothingItemById(id);
    addToCart({ ...item, quantity: 1, size: "M" });
  };

  return (
    <button
      className="hover:bg-neutral-200 p-2 rounded-lg transition-all"
      onClick={onClick}
    >
      <CartIndicator id={id} />
    </button>
  );
}
