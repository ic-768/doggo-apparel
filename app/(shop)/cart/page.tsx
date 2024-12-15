"use client";
// TODO scope use client
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useShoppingCart } from "@/context/use-shopping-cart";
import { getClothingItemById } from "@/lib/utils";
import Link from "@/components/ui/link";
import Main from "@/components/ui/main";

export default function CartPage() {
  const { cart } = useShoppingCart();

  // TODO
  if (!cart) {
    return <div>Loading...</div>;
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
        <Link href="/browse">← Back to Browse</Link>
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2 flex flex-col">
            <div className="flex flex-col gap-4">
              {cart.map((item) => {
                const { image, name } = getClothingItemById(item.id);

                return (
                  <Card key={`${item.id}${item.size}`} className="p-4">
                    <div className="flex gap-4">
                      <Image
                        src={image}
                        alt={name}
                        height={150}
                        className="w-24 h-24  rounded-md"
                      />

                      <div className="flex-1 flex flex-col gap-2">
                        <div className="flex justify-between">
                          <h3 className="font-semibold">{name}</h3>
                          <button className="text-gray-400 hover:text-gray-600">
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                        <p className="text-gray-600">Size: {item.size}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Button
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
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6">
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
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-black hover:bg-gray-800">
                Proceed to Checkout
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </Main>
  );
}
