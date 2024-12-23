import Image from "next/image";
import { notFound } from "next/navigation";

import FeaturesList from "@/components/item/features-list";
import InStockBadge from "@/components/item/in-stock-badge";
import InstructionsList from "@/components/item/instructions-list";
import NumberInCart from "@/components/item/number-in-cart";
import Policies from "@/components/item/policies";
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
    <Main className="items-center">
      <div className="container flex flex-col gap-6">
        <BackToBrowse />

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
              <InStockBadge />
            </div>

            <PurchaseControls item={item} />
            <Policies />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeaturesList item={item} />
          <InstructionsList />
        </div>
        <Suggestions itemId={Number(item.id)} />
      </div>
    </Main>
  );
}
