import * as React from "react";

import ItemCard from "@/components/item/item-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Main from "@/components/ui/main";
import { clothingCategories } from "@/lib/clothing-categories";

export default function ShopPage() {
  return (
    <Main>
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
                  <ItemCard {...item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ))}
    </Main>
  );
}
