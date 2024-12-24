"use client";
import { twMerge } from "tailwind-merge";

import { useShoppingCart } from "@/context/cart/use-shopping-cart";
import { getClothingItemById } from "@/lib/utils";

import CartIndicator from "../../ui/indicators/cart-indicator";

interface CartButtonProps {
  className?: string;
  size?: string;
  withText?: boolean;
  id: number;
}

export default function CartButton({
  id,
  className,
  size,
  withText,
}: CartButtonProps) {
  const { addToCart } = useShoppingCart();

  const onClick = () => {
    const item = getClothingItemById(id);
    addToCart({ ...item, quantity: 1, size: size || "M" });
  };

  const classes = twMerge(
    "hover:bg-neutral-200 p-2 rounded-lg transition-all",
    className,
  );

  return (
    <button className={classes} onClick={onClick}>
      <CartIndicator id={id} />
      {withText && <span className="hidden sm:inline">Add to cart</span>}
    </button>
  );
}
