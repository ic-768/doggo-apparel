"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Filters from "@/components/browse/viewing-controls/filters";
import MobileFilters from "@/components/browse/viewing-controls/mobile-filters";
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
import { getClothingCategoryByName } from "@/lib/utils";

// TODO
// export const metadata = {
//   title: "Browse",
// };

export default function ShopPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCategory = searchParams.get("category") || "All";
  const [category, setCategory] = useState(initialCategory);

  const [priceRange, setPriceRange] = useState([0, 100]);
  const [isGridView, setIsGridView] = useState(true);

  const updateCategory = (newCategory: string) => {
    setCategory(newCategory);
    router.push(`?category=${newCategory}`, { scroll: false });
  };

  const selectedCategory =
    category === "All" ? null : getClothingCategoryByName(category);

  return (
    <Main>
      <div className="fixed bottom-4 right-4 z-50 lg:hidden">
        <MobileFilters
          category={category}
          setCategory={updateCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          isGridView={isGridView}
          setIsGridView={setIsGridView}
        />
      </div>

      <div className="fixed left-4 top-32 hidden w-52 rounded-lg bg-white lg:block">
        <Filters
          category={category}
          setCategory={updateCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          isGridView={isGridView}
          setIsGridView={setIsGridView}
        />
      </div>

      <div className="flex flex-col gap-8 lg:pl-52">
        {category === "All" ? (
          clothingCategories.map((category) => (
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
          ))
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5">
            {selectedCategory?.items.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </Main>
  );
}
