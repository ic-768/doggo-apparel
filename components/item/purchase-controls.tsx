"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { ShoppingCart } from "lucide-react";

import SizeSelection from "@/components/item/size-selection";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "@/context/cart/use-shopping-cart";
import { useFavorites } from "@/context/favorites/use-favorites";
import { ClothingItem } from "@/lib/types";

import FavoritesButton from "./card/favorites-button";

export default function PurchaseControls({ item }: { item: ClothingItem }) {
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart } = useShoppingCart();
  const { addToFavorites } = useFavorites();

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
          size="lg"
          effect="shine"
          iconPlacement="left"
          icon={ShoppingCart}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
        <FavoritesButton id={item.id} />
      </div>
    </>
  );
}
