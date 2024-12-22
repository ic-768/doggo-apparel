"use client";

import { useShoppingCart } from "@/context/use-shopping-cart";
import { Badge } from "../ui/badge";
import { ClothingItem } from "@/lib/types";

export default function NumberInCart({ item }: { item: ClothingItem }) {
  const { getNumInCart } = useShoppingCart();
  const numInCart = getNumInCart(item.id);

  return !numInCart ? null : (
    <Badge variant="secondary" className="px-2 py-1">
      {numInCart} in cart
    </Badge>
  );
}
