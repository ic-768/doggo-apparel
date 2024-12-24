"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { ShoppingCart } from "lucide-react";

import SizeSelection from "@/components/item/size-selection";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "@/context/cart/use-shopping-cart";
import { ClothingItem } from "@/lib/types";

export default function PurchaseControls({ item }: { item: ClothingItem }) {
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart } = useShoppingCart();

  const handleAddToCart = () => {
    if (item.sizes && !selectedSize) {
      toast.error("Please select a size");
      return;
    }

    addToCart({
      id: item.id,
      price: item.price,
      size: selectedSize,
      quantity: 1,
    });

    toast.success("Added to cart!");
  };

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
        <Button
          className="rounded-full size-12 fixed top-32 right-2 outline outline-1 outline-neutral-400 sm:rounded-lg sm:relative sm:outline-none sm:w-auto sm:top-auto sm:right-auto"
          size="iconToLg"
          effect="shine"
          iconPlacement="left"
          iconClassName="size-6 sm:size-4"
          icon={ShoppingCart}
          onClick={handleAddToCart}
        >
          <span className="hidden sm:inline">Add to Cart</span>
        </Button>
      </div>
    </>
  );
}
