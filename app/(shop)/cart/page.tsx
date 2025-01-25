"use client";
import { AnimatePresence } from "framer-motion";

import CartItem from "@/components/cart/cart-item";
import ClearCart from "@/components/cart/clear-cart";
import NoCartItems from "@/components/cart/no-cart-items";
import OrderSummary from "@/components/cart/order-summary";
import BackToBrowse from "@/components/ui/back-to-browse";
import { Loader } from "@/components/ui/loader";
import Main from "@/components/ui/main";
import { useCartDetails } from "@/hooks/useCartDetails";

export default function CartPage() {
  const { cart, items, isLoading, subtotal, shipping, total } =
    useCartDetails();

  if (isLoading)
    return (
      <Main className="justify-center">
        <Loader />
      </Main>
    );

  const view = cart!.length ? (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="col-span-1 flex flex-col lg:col-span-2">
        <ul className="flex flex-col gap-4">
          <AnimatePresence>
            {items!.map((item) => (
              <CartItem key={`${item.id}${item.size}`} item={item} />
            ))}
          </AnimatePresence>
        </ul>
      </div>
      <OrderSummary
        withProceed
        subtotal={subtotal}
        shipping={shipping}
        total={total}
      />
    </div>
  ) : (
    <NoCartItems />
  );

  return (
    <Main className="items-center">
      <title>Cart</title>
      <div className="container flex flex-col gap-12">
        <div className="flex">
          <BackToBrowse />
          {cart!.length > 0 && <ClearCart />}
        </div>
        {view}
      </div>
    </Main>
  );
}
