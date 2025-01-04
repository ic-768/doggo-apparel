"use client";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";

import CartItem from "@/components/cart/cart-item";
import ClearCart from "@/components/cart/clear-cart";
import NoCartItems from "@/components/cart/no-cart-items";
import OrderSummary from "@/components/cart/order-summary";
import BackToBrowse from "@/components/ui/back-to-browse";
import Main from "@/components/ui/main";
import { useShoppingCart } from "@/context/cart/use-shopping-cart";
import { ClothingItem } from "@/lib/types";

export default function CartPage() {
  const { cart, shipping, subtotal, total } = useShoppingCart();

  const getData = async (): Promise<ClothingItem[]> => {
    const ids = cart?.map((item) => item.id);
    const res = await fetch(`/api/items?ids=${ids}`);
    return res.json();
  };

  const { data: items } = useQuery({
    queryKey: ["cart"],
    queryFn: getData,
    enabled: !!cart?.length,
  });

  if (cart === null || !items) return <Main />;

  const view = cart.length ? (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="col-span-1 flex flex-col lg:col-span-2">
        <ul className="flex flex-col gap-4">
          <AnimatePresence>
            {cart.map((item) => {
              // enrich cart data
              const fullItemData = {
                ...item,
                ...items.find((i) => i.id === item.id)!,
              };

              return (
                <CartItem key={`${item.id}${item.size}`} item={fullItemData} />
              );
            })}
          </AnimatePresence>
        </ul>
      </div>
      <OrderSummary subtotal={subtotal} shipping={shipping} total={total} />
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
          {cart.length > 0 && <ClearCart />}
        </div>
        {view}
      </div>
    </Main>
  );
}
