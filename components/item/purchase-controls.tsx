"use client";

import { useShoppingCart } from "@/context/use-shopping-cart";
import { toast } from "react-toastify";
import { useState } from "react";
import SizeSelection from "@/components/item/size-selection";
import { Button } from "@/components/ui/button";
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

      <Button onClick={handleAddToCart} className="w-full md:w-32">
        Add to Cart
      </Button>
    </>
  );
}
