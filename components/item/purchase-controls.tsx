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
          className="bg-primary text-primary-foreground hover:bg-primary/90 fixed top-32 right-2 outline outline-1 outline-neutral-400 rounded-full size-12 flex justify-center items-center sm:size-auto sm:static gap-4"
          id={item.id}
        />
      </div>
    </>
  );
}
