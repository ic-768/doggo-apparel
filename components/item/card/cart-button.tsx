"use client";
import { twMerge } from "tailwind-merge";

import { useShoppingCart } from "@/context/cart/use-shopping-cart";
import { ClothingItem } from "@/lib/types";

import CartIndicator from "../../ui/indicators/cart-indicator";

interface CartButtonProps {
  className?: string;
  size?: string;
  withText?: boolean;
  item: ClothingItem;
}

export default function CartButton({
  className,
  size,
  withText,
  item,
}: CartButtonProps) {
  const { addToCart } = useShoppingCart();

  const onClick = () => {
    addToCart({ id: item.id, quantity: 1, size: size || "M" });
  };

  const classes = twMerge(
    "hover:bg-neutral-200 p-2 rounded-lg transition-all",
    className,
  );

  return (
    <button className={classes} onClick={onClick}>
      <CartIndicator id={item.id} />
      {withText && <span className="hidden sm:inline">Add to cart</span>}
    </button>
  );
}
