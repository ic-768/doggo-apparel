import { getRelatedItems } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ItemCard from "./card/item-card";

export default function Suggestions({ itemId }: { itemId: number }) {
  const relatedItems = getRelatedItems(itemId);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-center text-2xl font-bold">You May Also Like</h2>
      <Carousel className="mx-16">
        <CarouselContent>
          {relatedItems.map((item) => (
            <CarouselItem
              key={item.name}
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
  );
}
