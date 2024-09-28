import * as React from "react";
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

const clothingCategories = [
  {
    name: "T-Shirts",
    items: [
      {
        id: 1,
        name: "Classic White Tee",
        price: 19.99,
        image: "/placeholder.svg?height=200&width=200",
        description: "A timeless white t-shirt for any occasion.",
      },
      {
        id: 2,
        name: "Graphic Print Tee",
        price: 24.99,
        image: "/placeholder.svg?height=200&width=200",
        description: "Bold graphic tee with unique designs.",
      },
      {
        id: 3,
        name: "V-Neck Tee",
        price: 22.99,
        image: "/placeholder.svg?height=200&width=200",
        description: "Comfortable V-neck tee in various colors.",
      },
      {
        id: 4,
        name: "Striped Tee",
        price: 26.99,
        image: "/placeholder.svg?height=200&width=200",
        description: "Classic striped pattern tee for a casual look.",
      },
    ],
  },
  {
    name: "Jeans",
    items: [
      {
        id: 5,
        name: "Slim Fit Jeans",
        price: 49.99,
        image: "/placeholder.svg?height=200&width=200",
        description: "Modern slim fit jeans for a sleek look.",
      },
      {
        id: 6,
        name: "Relaxed Fit Jeans",
        price: 54.99,
        image: "/placeholder.svg?height=200&width=200",
        description: "Comfortable relaxed fit jeans for everyday wear.",
      },
      {
        id: 7,
        name: "Distressed Jeans",
        price: 59.99,
        image: "/placeholder.svg?height=200&width=200",
        description: "Trendy distressed jeans with a worn-in look.",
      },
      {
        id: 8,
        name: "High-Waisted Jeans",
        price: 64.99,
        image: "/placeholder.svg?height=200&width=200",
        description: "Flattering high-waisted jeans for all body types.",
      },
    ],
  },
];

export default function ShopPage() {
  return (
    <div className="py-8 px-4 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">Our Collection</h1>
      {clothingCategories.map((category) => (
        <div key={category.name} className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">{category.name}</h2>
          <Carousel className="mx-16">
            <CarouselContent>
              {category.items.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card>
                    <CardHeader>
                      <div>image will go here </div>
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
