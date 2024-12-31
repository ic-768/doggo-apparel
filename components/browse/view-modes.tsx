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
  textFilter?: string;
}

export default function ViewModes({
  viewType,
  filteredData,
  category,
  textFilter,
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
      <AllList textFilter={textFilter} categories={filteredData} />
    ) : (
      <ItemList textFilter={textFilter} items={filteredData} />
    );
  };

  const renderCarouselView = () => {
    return isAllCategories ? (
      <AllCategoriesCarousels
        textFilter={textFilter}
        categories={filteredData}
      />
    ) : (
      <CategoryCarousel
        textFilter={textFilter}
        category={{
          name: category,
          items: filteredData,
        }}
      />
    );
  };

  return viewType === "grid" ? renderGridView() : renderCarouselView();
}

function AllList({
  categories,
  textFilter,
}: {
  categories: ClothingCategories;
  textFilter?: string;
}) {
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
          <ItemList textFilter={textFilter} items={category.items} />
        </MotionDiv>
      ),
  );
}
