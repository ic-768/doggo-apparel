import { useState } from "react";

import { clothingCategories } from "@/lib/clothing-categories";
import { getClothingCategoryByName } from "@/lib/utils";

import { useUrlCategory } from "./useUrlCategory";

export type ViewType = "carousel" | "grid";

export function useFilters() {
  const [textFilter, setTextFilter] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [viewType, setViewType] = useState<ViewType>("grid");
  const [category, setCategory] = useUrlCategory();

  const viewingAll = category === "all";

  const applyFilters = () => {
    const categories = viewingAll
      ? clothingCategories
      : [getClothingCategoryByName(category)!];

    // apply all filters
    return categories.map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(textFilter.toLowerCase()) &&
          item.price >= priceRange[0] &&
          item.price <= priceRange[1],
      ),
    }));
  };

  const filteredData = viewingAll
    ? // apply filters and return categories
      applyFilters()
    : // apply filters and return just items
      applyFilters().flatMap((category) => category.items);

  return {
    category: category,
    setCategory,
    priceRange,
    setPriceRange,
    viewType,
    setViewType,
    textFilter,
    setTextFilter,
    filteredData,
  };
}
