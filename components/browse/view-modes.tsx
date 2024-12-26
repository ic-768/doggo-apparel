import CategoryCarousel from "@/components/browse/category-carousel/category-carousel";
import ItemList from "@/components/item-list/item-list";
import { ViewType } from "@/hooks/useFilters";
import { ClothingCategories, ClothingItem } from "@/lib/types";

import NoFilteredResults from "../item-list/no-filtered-results";
import AllCategoriesCarousels from "./category-carousel/all-categories-carousels";

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
  const isAllCategory = category === "all";

  const isEmpty = isAllCategory
    ? (filteredData as ClothingCategories).every(
        (cat) => cat.items.length === 0,
      )
    : filteredData.length === 0;

  if (isEmpty) return <NoFilteredResults />;

  const renderGridView = () => {
    return isAllCategory ? (
      <AllList categories={filteredData as ClothingCategories} />
    ) : (
      <ItemList items={filteredData as ClothingItem[]} />
    );
  };

  const renderCarouselView = () => {
    return isAllCategory ? (
      <AllCategoriesCarousels categories={filteredData as ClothingCategories} />
    ) : (
      <CategoryCarousel
        category={{
          name: category,
          items: filteredData as ClothingItem[],
        }}
      />
    );
  };

  return viewType === "grid" ? renderGridView() : renderCarouselView();
}

function AllList({ categories }: { categories: ClothingCategories }) {
  return categories.map(
    (category) =>
      category.items.length !== 0 && (
        <div className="flex flex-col gap-6" key={category.name}>
          <h2 className="text-center text-2xl font-semibold text-secondary-foreground">
            {category.name}
          </h2>
          <ItemList items={category.items} />
        </div>
      ),
  );
}
