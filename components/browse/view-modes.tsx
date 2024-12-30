import CategoryCarousel from "@/components/browse/category-carousel/category-carousel";
import ItemList from "@/components/item-list/item-list";
import { ViewType } from "@/hooks/useFilters";
import { fadeIntoView } from "@/lib/motion";
import { ClothingCategories, ClothingItem } from "@/lib/types";

import NoFilteredResults from "../item-list/no-filtered-results";
import MotionDiv from "../ui/motion/motion-div";
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
  const hasAllCategories = (
    c: ClothingCategories | ClothingItem[],
  ): c is ClothingCategories => category === "all";

  const isAllCategories = hasAllCategories(filteredData);

  const isEmpty = isAllCategories
    ? filteredData.every((cat) => cat.items.length === 0)
    : filteredData.length === 0;

  if (isEmpty) return <NoFilteredResults />;

  const renderGridView = () => {
    return isAllCategories ? (
      <AllList categories={filteredData} />
    ) : (
      <ItemList items={filteredData} />
    );
  };

  const renderCarouselView = () => {
    return isAllCategories ? (
      <AllCategoriesCarousels categories={filteredData} />
    ) : (
      <CategoryCarousel
        category={{
          name: category,
          items: filteredData,
        }}
      />
    );
  };

  return viewType === "grid" ? renderGridView() : renderCarouselView();
}

function AllList({ categories }: { categories: ClothingCategories }) {
  return categories.map(
    (category, i) =>
      category.items.length !== 0 && (
        <MotionDiv
          key={category.name + i}
          {...fadeIntoView}
          className="flex flex-col gap-6"
        >
          <h2 className="text-center text-2xl font-semibold text-secondary-foreground">
            {category.name}
          </h2>
          <ItemList items={category.items} />
        </MotionDiv>
      ),
  );
}
