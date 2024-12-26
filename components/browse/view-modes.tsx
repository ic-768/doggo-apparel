import AllCategories from "@/components/browse/category-carousel";
import CategoryCarousel from "@/components/browse/category-carousel/category-carousel";
import ItemList from "@/components/item-list/item-list";
import { ViewType } from "@/hooks/useFilters";
import { ClothingCategories, ClothingItem } from "@/lib/types";

interface ViewModesProps {
  viewType: ViewType;
  filteredData: ClothingCategories | ClothingItem[];
  category: string;
}

export default function ViewModes({
  viewType,
  filteredData,
  category,
}: ViewModesProps) {
  let view = null;

  if (viewType === "grid") {
    if (category === "all") {
      view = <AllGrid categories={filteredData as ClothingCategories} />;
    } else {
      view = <ItemList items={filteredData as ClothingItem[]} />;
    }
  } else {
    if (category === "all") {
      view = <AllCategories categories={filteredData as ClothingCategories} />;
    } else {
      view = (
        <CategoryCarousel
          category={{
            name: category,
            items: filteredData as ClothingItem[],
          }}
        />
      );
    }
  }

  return view;
}

function AllGrid({ categories }: { categories: ClothingCategories }) {
  return categories.map((category) => (
    <div className="flex flex-col gap-6" key={category.name}>
      <h2 className="text-center text-2xl font-semibold text-secondary-foreground">
        {category.name}
      </h2>
      <ItemList items={category.items} />
    </div>
  ));
}
