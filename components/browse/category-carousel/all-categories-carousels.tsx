import NoFilteredResults from "@/components/item-list/no-filtered-results";
import { ClothingCategories } from "@/lib/types";

import CategoryCarousel from "./category-carousel";

export default function AllCategoriesCarousels({
  categories,
}: {
  categories: ClothingCategories;
}) {
  if (categories.every((cat) => cat.items.length === 0))
    return <NoFilteredResults />;

  return categories.map(
    (category) =>
      category.items.length !== 0 && (
        <CategoryCarousel category={category} key={category.name} />
      ),
  );
}
