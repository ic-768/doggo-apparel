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
    <section className="bg-blue-100 flex flex-col items-center gap-8 py-4">
      <div className="flex flex-col gap-10 container">
        {clothingCategories.map((category) => (
          <div className="flex flex-col gap-6" key={category.name}>
            <h2 className="text-secondary-foreground text-2xl font-semibold text-center">
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
    </section>
  );
}
