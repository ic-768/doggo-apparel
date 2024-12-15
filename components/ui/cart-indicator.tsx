"use client";

import { useShoppingCart } from "@/context/use-shopping-cart";
import { ShoppingCart } from "lucide-react";

export default function CartIndicator() {
  const { numItems } = useShoppingCart();

  return (
    <div className="relative">
      {numItems && numItems > 0 ? (
        <span className="absolute -top-3 -right-3 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
          {numItems}
        </span>
      ) : null}
      <ShoppingCart size={24} />
    </div>
  );
}
