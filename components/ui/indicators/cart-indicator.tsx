"use client";

import { ShoppingCart } from "lucide-react";

import { useShoppingCart } from "@/context/cart/use-shopping-cart";

import NumberBubble from "./number-bubble";

export default function CartIndicator({ id }: { id?: number }) {
  const { cart, numItems, getNumInCart } = useShoppingCart();

  const numToShow = id !== undefined ? getNumInCart(id) : numItems;

  if (cart === null) return null;

  return (
    <div className="relative">
      {numToShow > 0 && <NumberBubble number={numToShow} />}
      <ShoppingCart size={24} />
    </div>
  );
}
