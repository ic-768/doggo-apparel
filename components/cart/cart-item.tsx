"use client";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { CartItem } from "@/context/cart/shopping-cart";
import { useShoppingCart } from "@/context/cart/use-shopping-cart";
import { ClothingItem } from "@/lib/types";

import MotionLi from "../ui/motion/motion-li";

export default function CartItem({ item }: { item: CartItem & ClothingItem }) {
  const { removeFromCart, clearFromCart, addToCart } = useShoppingCart();

  const onReduce = () => {
    removeFromCart(item);
  };

  const onIncrease = () => {
    addToCart(item);
  };

  const onClear = () => {
    clearFromCart(item.id, item.size);
  };

  return (
    <MotionLi
      key={`${item.id}${item.size}`}
      layoutId={`${item.id}${item.size}`}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="p-4">
        <div className="flex gap-4">
          <NextLink href={`/item/${item.id}`} key={item.id}>
            <Image
              src={item.image}
              alt={item.name}
              height={150}
              className="h-24 w-24 rounded-md"
            />
          </NextLink>

          <div className="flex flex-1 flex-col gap-2">
            <div className="flex justify-between">
              <h3 className="font-semibold">{item.name}</h3>
              <button
                onClick={onClear}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {item.size ? (
              <p className="text-gray-600">Size: {item.size}</p>
            ) : null}
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  onClick={onReduce}
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  onClick={onIncrease}
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <p className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </MotionLi>
  );
}
