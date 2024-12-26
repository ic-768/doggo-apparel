import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";

import ItemCard from "@/components/item/card/item-card";
import { ClothingItem } from "@/lib/types";

import NoFilteredResults from "./no-filtered-results";

function ItemList({
  items = [],
  noResultElement = <NoFilteredResults />,
}: {
  items?: ClothingItem[];
  noResultElement?: ReactNode;
}) {
  if (items.length === 0) return noResultElement;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5">
      <AnimatePresence>
        {items?.map((item) => <ItemCard key={item.id} {...item} />)}
      </AnimatePresence>
    </div>
  );
}

export default ItemList;
