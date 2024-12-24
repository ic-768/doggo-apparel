"use client";

import { useState } from "react";

import SizeSelection from "@/components/item/size-selection";
import { ClothingItem } from "@/lib/types";

import CartButton from "./card/cart-button";

export default function PurchaseControls({ item }: { item: ClothingItem }) {
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <>
      {item.sizes && (
        <SizeSelection
          sizes={item.sizes}
          size={selectedSize}
          setSize={setSelectedSize}
        />
      )}

      <div className="flex gap-4">
        <CartButton
          withText
          size={selectedSize}
          className="fixed right-2 top-32 flex size-12 items-center justify-center gap-4 rounded-full bg-primary text-primary-foreground outline outline-1 outline-neutral-400 hover:bg-primary/90 sm:static sm:size-auto"
          id={item.id}
        />
      </div>
    </>
  );
}
