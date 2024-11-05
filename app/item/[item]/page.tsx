"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function ItemPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState("");

  const item = {
    id: 2,
    name: "Classic Denim Jacket",
    price: "$79.99",
    description:
      "A timeless denim jacket that never goes out of style. Made from high-quality, durable denim fabric, this jacket features a comfortable fit and versatile design that pairs well with any outfit.",
    image: "/placeholder.svg?height=600&width=600",
    sizes: ["XS", "S", "M", "L", "XL"],
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    alert(`Added ${item.name} (Size: ${selectedSize}) to cart!`);
  };

  return (
    <main className="bg-blue-100 mx-auto px-4 py-8">
      <div className="container">
        <Link
          href="/browse"
          className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-6"
        >
          <ChevronLeft size={20} />
          <span className="ml-1">Back to Browse</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
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
              <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
              <p className="text-2xl font-semibold text-purple-600 mb-4">
                {item.price}
              </p>
              <p className="text-gray-600 mb-6">{item.description}</p>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Select Size</h2>
                <RadioGroup
                  value={selectedSize}
                  onValueChange={setSelectedSize}
                  className="flex flex-wrap gap-4"
                >
                  {item.sizes.map((size) => (
                    <div key={size}>
                      <RadioGroupItem
                        value={size}
                        id={`size-${size}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`size-${size}`}
                        className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-200 text-sm font-medium peer-checked:border-purple-600 peer-checked:text-purple-600 cursor-pointer transition-colors"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Button onClick={handleAddToCart} className="w-full mb-4">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
