import ItemCard from "@/components/item/card/item-card";
import { ClothingItem } from "@/lib/types";

function Category({ items = [] }: { items?: ClothingItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5">
      {items?.map((item) => <ItemCard key={item.id} {...item} />)}
    </div>
  );
}

export default Category;
