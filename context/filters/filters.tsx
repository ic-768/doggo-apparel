"use client";

import { useState } from "react";
import React, { createContext, ReactNode } from "react";

import { useUrlCategory } from "@/hooks/useUrlCategory";
import { clothingCategories } from "@/lib/clothing-categories";
import { ClothingCategories, ClothingItem } from "@/lib/types";
import { debounce, getClothingCategoryByName } from "@/lib/utils";

type ViewType = "grid" | "carousel";

export interface FiltersContextType {
  category: string;
  setCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (priceRange: [number, number]) => void;
  viewType: ViewType;
  setViewType: (viewType: ViewType) => void;
  textFilter: string;
  setTextFilter: (textFilter: string) => void;
  filteredData: ClothingCategories | ClothingItem[];
}

export const FiltersContext = createContext<FiltersContextType | undefined>(
  undefined,
);

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
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

  const debouncedTextSearch = debounce(setTextFilter);
  const debouncedPriceSearch = debounce(setPriceRange, 100);

  return (
    <FiltersContext.Provider
      value={{
        category: category,
        setCategory,
        priceRange,
        setPriceRange: debouncedPriceSearch,
        viewType,
        setViewType,
        textFilter,
        setTextFilter: debouncedTextSearch,
        filteredData,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
