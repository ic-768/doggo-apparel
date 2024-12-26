import { ClothingCategories } from "@/lib/types";

import NoResults from "../no-results";
import CategoryCarousel from "./category-carousel";

export default function AllCategories({
  categories,
}: {
  categories: ClothingCategories;
}) {
  if (categories.every((cat) => cat.items.length === 0)) return <NoResults />;

  return categories.map(
    (category) =>
      category.items.length !== 0 && (
        <CategoryCarousel category={category} key={category.name} />
      ),
  );
}
