"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowRightIcon, Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";

import BackToBrowse from "@/components/ui/back-to-browse";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Main from "@/components/ui/main";
import { useShoppingCart } from "@/context/cart/use-shopping-cart";
import { getClothingItemById } from "@/lib/utils";

export default function CartPage() {
  const { cart, removeFromCart, clearFromCart, addToCart } = useShoppingCart();

  if (!cart) {
    return <Main />;
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <Main className="items-center">
      <div className="container">
        <BackToBrowse />
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2 flex flex-col">
            <ul className="flex flex-col gap-4">
              <AnimatePresence>
                {cart.map((item) => {
                  const { image, name } = getClothingItemById(item.id);

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
                    <motion.li
                      key={`${item.id}${item.size}`}
                      layoutId={`${item.id}${item.size}`}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="p-4">
                        <div className="flex gap-4">
                          <NextLink href={`/item/${item.id}`} key={item.id}>
                            <Image
                              src={image}
                              alt={name}
                              height={150}
                              className="w-24 h-24  rounded-md"
                            />
                          </NextLink>

                          <div className="flex-1 flex flex-col gap-2">
                            <div className="flex justify-between">
                              <h3 className="font-semibold">{name}</h3>
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
                            <div className="flex justify-between items-center mt-auto">
                              <div className="flex items-center gap-2">
                                <Button
                                  onClick={onReduce}
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center">
                                  {item.quantity}
                                </span>
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
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 flex flex-col gap-4">
              <h2 className="text-xl font-bold">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      key={total}
                    >
                      ${total.toFixed(2)}
                    </motion.span>
                  </div>
                </div>
              </div>
              <Button
                className="self-center"
                effect="expandIcon"
                icon={ArrowRightIcon}
                iconPlacement="right"
              >
                Proceed To Checkout
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </Main>
  );
}
