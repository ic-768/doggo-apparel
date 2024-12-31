import { AnimatePresence } from "framer-motion";

import ItemCard from "@/components/item/card/item-card";
import { ClothingItem } from "@/lib/types";

function ItemList({ items = [], textFilter }: { items?: ClothingItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-5">
      <AnimatePresence>
        {items?.map((item) => (
          <ItemCard key={item.id} {...item} textFilter={textFilter} />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ItemList;
