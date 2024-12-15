"use client";

import { useShoppingCart } from "@/context/use-shopping-cart";
import { toast } from "react-toastify";
import { useState } from "react";
import SizeSelection from "@/components/item/size-selection";
import { Button } from "@/components/ui/button";
import { ClothingItem } from "@/lib/types";
import { Heart, ShoppingCart } from "lucide-react";

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
        <Button onClick={handleAddToCart} className="flex-1" size="lg">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
        <Button className="flex-1" variant="outline" size="lg">
          <Heart className="w-4 h-4 mr-2" />
          Add to Wishlist
        </Button>
      </div>
    </>
  );
}
