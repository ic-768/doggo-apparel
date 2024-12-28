import { useState } from "react";

import { clothingCategories } from "@/lib/clothing-categories";
import { getClothingCategoryByName } from "@/lib/utils";

import { useUrlCategory } from "./useUrlCategory";

export type ViewType = "carousel" | "grid";

export function useFilters() {
  const [textFilter, setTextFilter] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [viewType, setViewType] = useState<ViewType>("grid");
  const [categoryName, setCategoryName] = useUrlCategory();

  const selectedCategory =
    categoryName === "all" ? null : getClothingCategoryByName(categoryName);

  const applyFilters = () => {
    const categories =
      categoryName === "all" ? clothingCategories : [selectedCategory!];

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

  const updateCategory = (newCategory: string) => {
    setCategoryName(newCategory);
  };

  const handlePriceRangeChange = (newRange: [number, number]) => {
    setPriceRange(newRange);
  };

  const handleTextFilterChange = (newText: string) => {
    setTextFilter(newText);
  };

  const filteredData =
    categoryName === "all"
      ? // apply filters and return categories
        applyFilters()
      : // apply filters and return just items
        applyFilters().flatMap((category) => category.items);

  return {
    category: categoryName,
    setCategory: updateCategory,
    priceRange,
    setPriceRange: handlePriceRangeChange,
    viewType,
    setViewType,
    textFilter,
    setTextFilter: handleTextFilterChange,
    filteredData,
  };
}
