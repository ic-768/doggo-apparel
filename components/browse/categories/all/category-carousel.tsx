import ItemCard from "@/components/item/card/item-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ClothingCategory } from "@/lib/types";

export default function CategoryCarousel({
  category,
}: {
  category: ClothingCategory;
}) {
  return (
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
  );
}
