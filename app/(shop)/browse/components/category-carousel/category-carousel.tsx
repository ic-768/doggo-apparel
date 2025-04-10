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
import MotionDiv from "@/components/ui/motion/motion-div";
import { fadeIntoView } from "@/lib/motion";
import { ClothingCategory } from "@/lib/types";

function CategoryCarousel({
  category,
  textFilter,
}: {
  category: ClothingCategory;
  textFilter?: string;
}) {
  return (
    <MotionDiv
      key={category.name}
      {...fadeIntoView}
      className="flex flex-col gap-6"
    >
      <h2 className="text-center text-2xl font-semibold capitalize text-secondary-foreground">
        {category.name}
      </h2>
      <Carousel className="mx-16">
        <CarouselContent>
          <AnimatePresence mode="popLayout">
            {category.items.map((item, i) => (
              <CarouselItem
                key={item.name + i}
                className="flex sm:basis-1/2 md:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
              >
                <ItemCard item={item} textFilter={textFilter} />
              </CarouselItem>
            ))}
          </AnimatePresence>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </MotionDiv>
  );
}

export default memo(CategoryCarousel);
