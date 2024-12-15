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
import BrowseCard from "@/components/browse/browse-card";

export default async function ItemPage({
  params,
}: {
  params: Promise<{ item: string }>;
}) {
  const itemId = (await params).item;

  const item = getClothingItemById(Number(itemId));
  const relatedItems = getRelatedItems(Number(itemId));

  if (!item) {
    notFound();
  }

  return (
    <Main className="items-center">
      <div className="container">
        <Link
          href="/browse"
          className="text-blue-500 hover:text-blue-700 inline-flex items-center transition-colors"
        >
          <ChevronLeft size={20} />
          <span>Back to Browse</span>
        </Link>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative max-h-96 max-w-96">
            <Image
              src={item.image}
              alt={item.name}
              className="object-cover rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-4 grow">
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
            <p className="text-2xl font-semibold text-purple-600">
              ${item.price}
            </p>
            <p className="text-gray-600">{item.description}</p>

            <div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="px-2 py-1">
                  4 in cart
                </Badge>
                <Badge variant="secondary" className="px-2 py-1">
                  In Stock
                </Badge>
              </div>
            </div>
            <PurchaseControls item={item} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <Truck className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">Free Shipping</h3>
                    <p className="text-sm text-gray-600">On orders over $50</p>
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

        <div>
          <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
          <Carousel>
            <CarouselContent>
              {relatedItems.map((item) => (
                <CarouselItem
                  key={item.name}
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
      </div>
    </Main>
  );
}
