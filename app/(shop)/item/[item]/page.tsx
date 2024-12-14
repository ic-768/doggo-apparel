import { notFound } from "next/navigation"; // Import the notFound helper
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { getClothingItemById } from "@/lib/utils";
import PurchaseControls from "@/components/item/purchase-controls";

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
    <main className="py-8 px-4 mx-auto bg-blue-100 md:px-32">
      <div className="container">
        <Link
          href="/browse"
          className="inline-flex items-center text-purple-600 hover:text-purple-800"
        >
          <ChevronLeft size={20} />
          <span className="ml-1">Back to Browse</span>
        </Link>

        <div className="grid gap-8 md:grid-cols-2">
          <Image src={item.image} alt={item.name} className="rounded-lg" />
          <div className="flex flex-col gap-4 grow">
            <h1 className="text-3xl font-bold">{item.name}</h1>
            <p className="text-2xl font-semibold text-purple-600">
              ${item.price}
            </p>
            <p className="text-gray-600">{item.description}</p>
            <PurchaseControls item={item} />
          </div>
        </div>
      </div>
    </main>
  );
}
