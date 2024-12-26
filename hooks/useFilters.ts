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

  // filtered category items
  const [filteredItems, setFilteredItems] = useState(
    selectedCategory?.items || [],
  );

  // filtered categories ( if showing all )
  const [filteredCategories, setFilteredCategories] =
    useState(clothingCategories);

  // when changing a category, take filters into consideration
  const updateCategory = (newCategory: string) => {
    setCategoryName(newCategory);
    if (newCategory !== "All") {
      const filteredItems = filterItemsByPrice(
        getClothingCategoryByName(newCategory)!.items,
        priceRange,
      );
      setFilteredItems(filteredItems);
    } else {
      setFilteredCategories(filterCategoriesByPrice(priceRange));
    }
  };

  // filter a category
  const filterItemsByPrice = (
    items: ClothingItem[],
    [min, max]: [number, number],
  ): ClothingItem[] =>
    items.filter((item) => item.price >= min && item.price <= max);

  // filter all categories
  const filterCategoriesByPrice = ([min, max]: [number, number]) => {
    return clothingCategories.map((category) => ({
      ...category,
      items: filterItemsByPrice(category.items, [min, max]),
    }));
  };

  // filter category items or all categories based on what is being viewed
  const handlePriceRangeChange = (newRange: [number, number]) => {
    setPriceRange(newRange);
    startTransition(() => {
      selectedCategory
        ? setFilteredItems(filterItemsByPrice(selectedCategory.items, newRange))
        : setFilteredCategories(filterCategoriesByPrice(newRange));
    });
  };

  return {
    category: categoryName,
    priceRange,
    filteredItems,
    filteredCategories,
    updateCategory,
    handlePriceRangeChange,
  };
}
