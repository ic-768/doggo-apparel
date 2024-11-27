"use client";

import { ShoppingCartProvider } from "@/context/shopping-cart";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ShoppingCartProvider>{children}</ShoppingCartProvider>;
}
