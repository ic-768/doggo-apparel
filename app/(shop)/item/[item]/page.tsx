import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import FavoritesButton from "@/components/item/card/favorites-button";
import DetailTabs from "@/components/item/detail-tabs";
import InStockBadge from "@/components/item/in-stock-badge";
import NumberInCart from "@/components/item/number-in-cart";
import PriceTag from "@/components/item/price-tag";
import PurchaseControls from "@/components/item/purchase-controls";
import ReviewsScore from "@/components/item/reviews-score";
import Suggestions from "@/components/item/suggestions";
import BackToBrowse from "@/components/ui/back-to-browse";
import { Card } from "@/components/ui/card";
import Main from "@/components/ui/main";
import { getClothingItemById } from "@/lib/utils";

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

  return (
    <Suspense>
      <Main className="items-center">
        <div className="container flex flex-col gap-8">
          <BackToBrowse />

          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative">
              <Image
                src={item.image}
                alt={item.name}
                className="rounded-2xl object-cover"
              />
            </div>

            <div className="flex flex-col items-center gap-4 md:items-start">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold">{item.name}</h1>
                <PriceTag price={item.price} />
                <FavoritesButton
                  className="fixed right-2 top-48 flex size-12 items-center justify-center rounded-full bg-red-100 outline outline-1 outline-red-400 hover:bg-red-200 sm:static"
                  id={item.id}
                />
              </div>
              <ReviewsScore />
              <Card className="p-4 text-gray-600">{item.description}</Card>

              <div className="flex flex-col gap-8">
                <div className="flex justify-center gap-2 md:justify-start">
                  <NumberInCart item={item} />
                  <InStockBadge />
                </div>

                <PurchaseControls item={item} />
                <DetailTabs item={item} />
              </div>
            </div>
          </div>

          <Suggestions itemId={Number(item.id)} />
        </div>
      </Main>
    </Suspense>
  );
}
