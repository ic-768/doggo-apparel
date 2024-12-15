import { notFound } from "next/navigation"; // Import the notFound helper
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Shield, Star, Truck } from "lucide-react";

import { getClothingItemById, getRelatedItems } from "@/lib/utils";
import PurchaseControls from "@/components/item/purchase-controls";
import Main from "@/components/ui/main";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ItemCard from "@/components/item/item-card";

export default async function ItemPage({
  params,
}: {
  params: Promise<{ item: string }>;
}) {
  const itemId = (await params).item;

  const item = getClothingItemById(Number(itemId));

  if (!item) {
    notFound();
  }

  const relatedItems = getRelatedItems(Number(itemId));

  return (
    <Main className="items-center">
      <div className="container flex flex-col gap-6">
        <Link
          href="/browse"
          className="text-blue-500 hover:text-blue-700 inline-flex items-center transition-colors"
        >
          <ChevronLeft size={20} />
          <span>Back to Browse</span>
        </Link>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative">
            <Image
              src={item.image}
              alt={item.name}
              className="object-cover rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{item.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">(128 reviews)</span>
            </div>
            <Badge
              variant="secondary"
              className="text-lg font-semibold self-start"
            >
              ${item.price.toFixed(2)}
            </Badge>
            <Card className="p-4 text-gray-600 self-start">
              {item.description}
            </Card>

            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="px-2 py-1">
                4 in cart
              </Badge>
              <Badge variant="secondary" className="px-2 py-1">
                In Stock
              </Badge>
            </div>

            <div className="mt-16 flex flex-col gap-8">
              <PurchaseControls item={item} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <Truck className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Free Shipping</h3>
                      <p className="text-sm text-gray-600">
                        On orders over $50
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Satisfaction Guaranteed</h3>
                      <p className="text-sm text-gray-600">
                        30-day return policy
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-4">
              <h3 className="font-semibold">Features</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Premium cotton material</li>
                <li>Double-stitched edges for durability</li>
                <li>Adjustable fit for comfort</li>
                <li>Machine washable</li>
                {item.sizes ? <li>Available in multiple sizes</li> : null}
              </ul>
            </Card>
            <Card className="p-4">
              <h3 className="font-semibold">Care Instructions</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Machine wash cold</li>
                <li>Tumble dry low</li>
                <li>Do not bleach</li>
                <li>Iron on low if needed</li>
              </ul>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
          <Carousel className="mx-16">
            <CarouselContent>
              {relatedItems.map((item) => (
                <CarouselItem
                  key={item.name}
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
      </div>
    </Main>
  );
}
