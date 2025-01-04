import { AnimatePresence } from "framer-motion";

import ItemCard from "@/components/item/card/item-card";
import { ClothingItem } from "@/lib/types";

interface ItemListProps {
  items?: ClothingItem[];
  textFilter?: string;
}

function ItemList({ items = [], textFilter }: ItemListProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-5">
      <AnimatePresence>
        {items?.map((item) => (
          <ItemCard key={item.id} item={item} textFilter={textFilter} />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ItemList;
