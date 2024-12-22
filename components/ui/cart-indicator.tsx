"use client";

import { useShoppingCart } from "@/context/use-shopping-cart";
import { ShoppingCart } from "lucide-react";

export default function CartIndicator({ id }: { id?: number }) {
  const { numItems, getNumInCart } = useShoppingCart();

  const numToShow = id !== undefined ? getNumInCart(id) : numItems;

  return (
    <div className="relative">
      {numToShow > 0 ? (
        <span className="absolute -top-3 -right-3 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
          {numToShow}
        </span>
      ) : null}
      <ShoppingCart size={24} />
    </div>
  );
}
