import ItemList from "@/components/item-list/item-list";
import NoFilteredResults from "@/components/item-list/no-filtered-results";
import { ClothingItem } from "@/lib/types";

export default function Category({ items }: { items: ClothingItem[] }) {
  if (items.length === 0) {
    return <NoFilteredResults />;
  }

  return <ItemList items={items} />;
}
