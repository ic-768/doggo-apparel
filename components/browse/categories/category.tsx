import { AnimatePresence } from "framer-motion";

import ItemCard from "@/components/item/card/item-card";
import { ClothingItem } from "@/lib/types";

import NoResults from "./no-results";

function Category({ items = [] }: { items?: ClothingItem[] }) {
  if (items.length === 0) return <NoResults />;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5">
      <AnimatePresence>
        {items?.map((item) => <ItemCard key={item.id} {...item} />)}
      </AnimatePresence>
    </div>
  );
}

export default Category;
