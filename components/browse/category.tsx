import ItemList from "@/components/item-list/item-list";
import NoFilteredResults from "@/components/item-list/no-filtered-results";
import { ClothingItem } from "@/lib/types";

export default function Category({
  items,
  textFilter,
}: {
  items: ClothingItem[];
  textFilter: string;
}) {
  if (items.length === 0) {
    return <NoFilteredResults />;
  }

  return <ItemList items={items} textFilter={textFilter} />;
}
