import * as React from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { clothingCategories } from "@/lib/clothing-categories";

export default function ShopPage() {
  return (
    <div className="py-8 px-4 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">Our Collection</h1>
      {clothingCategories.map((category) => (
        <div key={category.name} className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">{category.name}</h2>
          <Carousel className="mx-16">
            <CarouselContent>
              {category.items.map((item, i) => (
                <CarouselItem
                  key={item.name + i}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
                >
                  <Card>
                    <CardHeader>
                      <Image
                        className="w-full rounded-lg"
                        alt={`Bandana ${i + 1}`}
                        src={item.image}
                        height={500}
                        width={500}
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>{item.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Badge
                        variant="secondary"
                        className="text-lg font-semibold"
                      >
                        ${item.price.toFixed(2)}
                      </Badge>
                      <Button size="sm">Add to Cart</Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ))}
    </div>
  );
}
