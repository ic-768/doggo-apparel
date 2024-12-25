import { ClothingCategories } from "@/lib/types";

import CategoryCarousel from "./category-carousel";

export default function AllCategories({
  categories,
}: {
  categories: ClothingCategories;
}) {
  return categories.map((category) => (
    <CategoryCarousel category={category} key={category.name} />
  ));
}
