import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { getClothingItemById, getRelatedItems } from "@/lib/utils";
import PurchaseControls from "@/components/item/purchase-controls";
import Main from "@/components/ui/main";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ItemCard from "@/components/item/item-card";
import PriceTag from "@/components/item/price-tag";
import ReviewsScore from "@/components/item/reviews-score";
import Policies from "@/components/item/policies";
import NumberInCart from "@/components/item/number-in-cart";

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
            <ReviewsScore />
            <PriceTag price={item.price} />
            <Card className="p-4 text-gray-600 self-start">
              {item.description}
            </Card>

            <div className="flex items-center gap-2">
              <NumberInCart item={item} />
              <Badge variant="secondary" className="px-2 py-1">
                In Stock
              </Badge>
            </div>

            <PurchaseControls item={item} />
            <Policies />
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
