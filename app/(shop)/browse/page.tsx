"use client";
import * as React from "react";
import { useState } from "react";

import FloatingFilters from "@/components/browse/viewing-controls/floating-filters";
import StaticFilters from "@/components/browse/viewing-controls/static-filters";
import ItemCard from "@/components/item/card/item-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Main from "@/components/ui/main";
import { clothingCategories } from "@/lib/clothing-categories";

// export const metadata = {
//   title: "Browse",
// };

export default function ShopPage() {
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [isGridView, setIsGridView] = useState(true);

  return (
    <Main>
      <div>
        <div className="fixed bottom-4 right-4 z-50 lg:hidden">
          <FloatingFilters
            category={category}
            setCategory={setCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            isGridView={isGridView}
            setIsGridView={setIsGridView}
          />
        </div>

        <div className="hidden w-96 lg:block">
          <StaticFilters
            category={category}
            setCategory={setCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            isGridView={isGridView}
            setIsGridView={setIsGridView}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {clothingCategories.map((category) => (
          <div className="flex flex-col gap-6" key={category.name}>
            <h2 className="text-center text-2xl font-semibold text-secondary-foreground">
              {category.name}
            </h2>
            <Carousel className="mx-16">
              <CarouselContent>
                {category.items.map((item, i) => (
                  <CarouselItem
                    key={item.name + i}
                    className="flex md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
                  >
                    <ItemCard {...item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ))}
      </div>
    </Main>
  );
}
