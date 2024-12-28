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
          className="fixed right-2 top-32 flex size-12 items-center justify-center gap-4 rounded-full bg-indigo-700 text-primary-foreground outline outline-1 outline-indigo-950 hover:bg-indigo-800 sm:static sm:size-auto sm:px-4"
          id={item.id}
        />
      </div>
    </>
  );
}
