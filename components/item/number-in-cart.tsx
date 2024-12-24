"use client";

import { useShoppingCart } from "@/context/cart/use-shopping-cart";
import { ClothingItem } from "@/lib/types";

import { Badge } from "../ui/badge";

export default function NumberInCart({ item }: { item: ClothingItem }) {
  const { getNumInCart } = useShoppingCart();
  const numInCart = getNumInCart(item.id);

  return !numInCart ? null : (
    <Badge
      variant="secondary"
      className="px-2 py-1 outline outline-1 outline-neutral-300"
    >
      {numInCart} in cart
    </Badge>
  );
}
