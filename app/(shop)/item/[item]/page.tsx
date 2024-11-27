"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import SizeSelection from "@/components/ui/size-selection";

import { getClothingItemById } from "@/lib/utils";
import { toast } from "react-toastify";
import { useShoppingCart } from "@/context/use-shopping-cart";

export default function ItemPage() {
  const { item: id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart } = useShoppingCart();

  const item = getClothingItemById(Number(id));

  if (!item) return;

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
    <main className="py-8 px-4 mx-auto bg-blue-100 md:px-32">
      <div className="container">
        <Link
          href="/browse"
          className="inline-flex items-center text-purple-600 hover:text-purple-800"
        >
          <ChevronLeft size={20} />
          <span className="ml-1">Back to Browse</span>
        </Link>

        <div className="grid gap-8 md:grid-cols-2">
          <Image src={item.image} alt={item.name} className="rounded-lg" />
          <div className="flex flex-col gap-4 grow">
            <h1 className="text-3xl font-bold">{item.name}</h1>
            <p className="text-2xl font-semibold text-purple-600">
              ${item.price}
            </p>
            <p className="text-gray-600">{item.description}</p>

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
          </div>
        </div>
      </div>
    </main>
  );
}
