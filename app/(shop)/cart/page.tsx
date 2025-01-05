"use client";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";

import CartItem from "@/components/cart/cart-item";
import ClearCart from "@/components/cart/clear-cart";
import NoCartItems from "@/components/cart/no-cart-items";
import OrderSummary from "@/components/cart/order-summary";
import BackToBrowse from "@/components/ui/back-to-browse";
import { Loader } from "@/components/ui/loader";
import Main from "@/components/ui/main";
import { useShoppingCart } from "@/context/cart/use-shopping-cart";
import { fetchItems } from "@/lib/fetch";

export default function CartPage() {
  const { cart } = useShoppingCart();

  const { data: items = [], isFetching } = useQuery({
    queryKey: ["cart"],
    queryFn: () => {
      const ids = cart!.map((item) => item.id);
      return fetchItems(ids);
    },
    enabled: !!cart?.length,
  });

  if (cart === null || !items || isFetching)
    return (
      <Main className="justify-center">
        <Loader />
      </Main>
    );

  // combine cart data (size, quantity) with full item data
  const enrichedItems = cart.map((item) => {
    return {
      ...item,
      ...items.find((i) => i.id === item.id)!,
    };
  });

  const subtotal = enrichedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 50 ? 0 : 5;
  const total = subtotal + shipping;

  const view = cart.length ? (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="col-span-1 flex flex-col lg:col-span-2">
        <ul className="flex flex-col gap-4">
          <AnimatePresence>
            {enrichedItems.map((item) => {
              return <CartItem key={`${item.id}${item.size}`} item={item} />;
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
