import { ClothingCategories } from "@/lib/types";

import CategoryCarousel from "./category-carousel";

export default function AllCategoriesCarousels({
  categories,
}: {
  categories: ClothingCategories;
}) {
  return categories.map(
    (category) =>
      category.items.length !== 0 && (
        <CategoryCarousel category={category} key={category.name} />
      ),
  );
}
