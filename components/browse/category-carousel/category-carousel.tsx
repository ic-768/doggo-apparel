import { memo } from "react";
import { AnimatePresence } from "framer-motion";

import ItemCard from "@/components/item/card/item-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ClothingCategory } from "@/lib/types";

function CategoryCarousel({ category }: { category: ClothingCategory }) {
  return (
    <div className="flex flex-col gap-6" key={category.name}>
      <h2 className="text-center text-2xl font-semibold text-secondary-foreground">
        {category.name}
      </h2>
      <Carousel className="mx-16">
        <CarouselContent>
          <AnimatePresence>
            {category.items.map((item, i) => (
              <CarouselItem
                key={item.name + i}
                className="flex sm:basis-1/2 md:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
              >
                <ItemCard {...item} />
              </CarouselItem>
            ))}
          </AnimatePresence>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default memo(CategoryCarousel);
