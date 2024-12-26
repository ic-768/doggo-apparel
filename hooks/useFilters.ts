import { useState, useTransition } from "react";

import { clothingCategories } from "@/lib/clothing-categories";
import { ClothingItem } from "@/lib/types";
import { getClothingCategoryByName } from "@/lib/utils";

import { useUrlCategory } from "./useUrlCategory";

export function useFilters() {
  const [_, startTransition] = useTransition();

  // get category name
  const [categoryName, setCategoryName] = useUrlCategory();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  // null if no specific category
  const selectedCategory =
    categoryName === "All" ? null : getClothingCategoryByName(categoryName);

  // will have items if category is selected, else categories with items
  const [filteredData, setFilteredData] = useState(
    categoryName === "All" ? clothingCategories : selectedCategory?.items,
  );

  // filter items of a category
  const filterItemsByPrice = (
    items: ClothingItem[],
    [min, max]: [number, number],
  ): ClothingItem[] =>
    items.filter((item) => item.price >= min && item.price <= max);

  // filter items of all categories
  const filterCategoriesByPrice = ([min, max]: [number, number]) => {
    return clothingCategories.map((category) => ({
      ...category,
      items: filterItemsByPrice(category.items, [min, max]),
    }));
  };

  // when changing a category, take filters into consideration
  const updateCategory = (newCategory: string) => {
    setCategoryName(newCategory);
    setFilteredData(
      newCategory === "All"
        ? filterCategoriesByPrice(priceRange)
        : filterItemsByPrice(
            getClothingCategoryByName(newCategory)!.items,
            priceRange,
          ),
    );
  };

  // filter category items or all categories based on what is being viewed
  const handlePriceRangeChange = (newRange: [number, number]) => {
    setPriceRange(newRange);
    startTransition(() => {
      setFilteredData(
        selectedCategory
          ? filterItemsByPrice(selectedCategory.items, newRange)
          : filterCategoriesByPrice(newRange),
      );
    });
  };

  return {
    category: categoryName,
    priceRange,
    filteredData,
    updateCategory,
    handlePriceRangeChange,
  };
}
