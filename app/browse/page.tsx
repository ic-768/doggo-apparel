import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { clothingCategories } from "@/lib/clothing-categories";
import BrowseCard from "@/components/browse/browse-card";

export default function ShopPage() {
  return (
    <div className="py-8 px-4 mx-auto bg-blue-100">
      <h1 className="mb-8 text-3xl font-bold">Our Collection</h1>
      <div className="flex flex-col gap-12">
        {clothingCategories.map((category) => (
          <div className="flex flex-col gap-4" key={category.name}>
            <h2 className="text-secondary-foreground text-2xl font-semibold">
              {category.name}
            </h2>
            <Carousel className="mx-16">
              <CarouselContent>
                {category.items.map((item, i) => (
                  <CarouselItem
                    key={item.name + i}
                    className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5 flex"
                  >
                    <BrowseCard {...item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ))}
      </div>
    </div>
  );
}
