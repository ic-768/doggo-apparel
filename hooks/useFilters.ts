import { useState, useTransition } from "react";

import { clothingCategories } from "@/lib/clothing-categories";
import { ClothingCategories, ClothingItem } from "@/lib/types";
import { getClothingCategoryByName } from "@/lib/utils";

import { useUrlCategory } from "./useUrlCategory";

export type ViewType = "carousel" | "grid";
export function useFilters() {
  const [_, startTransition] = useTransition();
  const [textFilter, setTextFilter] = useState("");

  // get category name
  const [categoryName, setCategoryName] = useUrlCategory();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [viewType, setViewType] = useState<ViewType>("grid");

  // null if no specific category
  const selectedCategory =
    categoryName === "all" ? null : getClothingCategoryByName(categoryName);

  // will have items if category is selected, else categories with items
  const [filteredData, setFilteredData] = useState<
    ClothingCategories | ClothingItem[]
  >(
    categoryName === "all" ? clothingCategories : selectedCategory?.items || [],
  );

  // filter items of a category
  const filterItemsByPrice = (
    [min, max]: [number, number],
    items: ClothingItem[],
  ): ClothingItem[] =>
    items.filter((item) => item.price >= min && item.price <= max);

  // filter items of all categories
  const filterCategoriesByPrice = (
    [min, max]: [number, number],
    categories = clothingCategories,
  ) => {
    return categories.map((category) => ({
      ...category,
      items: filterItemsByPrice([min, max], category.items),
    }));
  };

  const filterItemsByText = (text: string, items: ClothingItem[]) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );

  const filterCategoriesByText = (
    text: string,
    categories = clothingCategories,
  ) =>
    categories.map((category) => ({
      ...category,
      items: filterItemsByText(text, category.items),
    }));

  // when changing a category, take filters into consideration
  const updateCategory = (newCategory: string) => {
    setCategoryName(newCategory);
    setFilteredData(
      newCategory === "all"
        ? filterCategoriesByText(
            textFilter,
            filterCategoriesByPrice(priceRange),
          )
        : filterItemsByText(
            textFilter,
            filterItemsByPrice(
              priceRange,
              getClothingCategoryByName(newCategory)!.items,
            ),
          ),
    );
  };

  // filter category items or all categories based on what is being viewed
  const handlePriceRangeChange = (newRange: [number, number]) => {
    setPriceRange(newRange);
    startTransition(() => {
      setFilteredData(
        selectedCategory
          ? filterItemsByText(
              textFilter,
              filterItemsByPrice(newRange, selectedCategory.items),
            )
          : filterCategoriesByText(
              textFilter,
              filterCategoriesByPrice(newRange),
            ),
      );
    });
  };

  const handleTextFilterChange = (newText: string) => {
    setTextFilter(newText);
    startTransition(() => {
      setFilteredData(
        selectedCategory
          ? filterItemsByText(newText, selectedCategory.items)
          : filterCategoriesByText(newText),
      );
    });
  };

  return {
    category: categoryName,
    priceRange,
    filteredData,
    setCategory: updateCategory,
    setPriceRange: handlePriceRangeChange,
    viewType,
    setViewType,
    textFilter,
    setTextFilter: handleTextFilterChange,
  };
}
