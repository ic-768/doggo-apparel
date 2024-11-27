"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { getClothingItemById } from "@/lib/utils";

export default function ItemPage() {
  const { item: id } = useParams();

  const [selectedSize, setSelectedSize] = useState("");

  const item = getClothingItemById(Number(id))!;

  const isSizedItem = item.sizes?.length;

  const handleAddToCart = () => {
    // TODO use toasts instead
    if (isSizedItem && !selectedSize) {
      alert("Please select a size");
      return;
    }
    alert(`Added ${item.name} (Size: ${selectedSize}) to cart!`);
  };

  return (
    <main className="py-8 px-4 mx-auto bg-blue-100">
      <div className="container">
        <Link
          href="/browse"
          className="inline-flex items-center mb-6 text-purple-600 hover:text-purple-800"
        >
          <ChevronLeft size={20} />
          <span className="ml-1">Back to Browse</span>
        </Link>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden relative rounded-lg h-[400px] md:h-[600px]">
            <Image
              src={item.image}
              alt={item.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1 className="mb-2 text-3xl font-bold">{item.name}</h1>
              <p className="mb-4 text-2xl font-semibold text-purple-600">
                ${item.price}
              </p>
              <p className="mb-6 text-gray-600">{item.description}</p>

              {isSizedItem && (
                <div className="mb-6">
                  <h2 className="mb-2 text-lg font-semibold">Select Size</h2>
                  <RadioGroup
                    value={selectedSize}
                    onValueChange={setSelectedSize}
                    className="flex flex-wrap gap-4"
                  >
                    {item.sizes?.map((size) => {
                      return (
                        <div key={size}>
                          <RadioGroupItem
                            value={size}
                            id={`size-${size}`}
                            className="sr-only peer"
                          />
                          <Label
                            htmlFor={`size-${size}`}
                            className="flex justify-center items-center w-12 h-12 text-sm font-medium rounded-full border-2 border-gray-200 transition-colors cursor-pointer"
                          >
                            {size}
                          </Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                </div>
              )}

              <Button onClick={handleAddToCart} className="mb-4 w-full">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
