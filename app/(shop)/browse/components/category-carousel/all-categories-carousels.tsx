import { ClothingCategories } from "@/lib/types";

import CategoryCarousel from "./category-carousel";

export default function AllCategoriesCarousels({
  categories,
  textFilter,
}: {
  categories: ClothingCategories;
  textFilter?: string;
}) {
  return categories.map(
    (category) =>
      category.items.length !== 0 && (
        <CategoryCarousel
          key={category.name}
          category={category}
          textFilter={textFilter}
        />
      ),
  );
}
