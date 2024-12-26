import { ClothingCategories } from "@/lib/types";

import NoFilteredResults from "../no-filtered-results";
import CategoryCarousel from "./category-carousel";

export default function AllCategories({
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
