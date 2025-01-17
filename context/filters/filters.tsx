"use client";

import { useState } from "react";
import React, { createContext, ReactNode } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { clothingCategories } from "@/lib/clothing-categories";
import { ClothingCategories, ClothingItem } from "@/lib/types";
import {
  addQueryParams,
  debounce,
  getClothingCategoryByName,
} from "@/lib/utils";

type ViewType = "grid" | "carousel";

export interface FiltersContextType {
  viewType: ViewType;
  setViewType: (viewType: ViewType) => void;
  filteredData: ClothingCategories | ClothingItem[];
  category: string;
  textFilter: string;
  priceRange: [number, number];
  setFilters: ({
    categoryFilter,
    textFilter,
    priceRange,
  }: {
    categoryFilter?: string;
    textFilter?: string;
    priceRange?: [number, number];
  }) => void;
}

export const FiltersContext = createContext<FiltersContextType | undefined>(
  undefined,
);

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const urlCategory = searchParams.get("category") || "all";
  const urlText = searchParams.get("text") || "";

  const urlPriceRange: [number, number] = [
    Number(searchParams.get("priceFrom") || 0),
    Number(searchParams.get("priceTo") || 100),
  ];

  const [viewType, setViewType] = useState<ViewType>("grid");
  const viewingAll = urlCategory === "all";

  const applyFilters = () => {
    const categories = viewingAll
      ? clothingCategories
      : [getClothingCategoryByName(urlCategory)!];

    // apply all filters
    return categories.map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(urlText.toLowerCase()) &&
          item.price >= Number(urlPriceRange[0] || 0) &&
          item.price <= Number(urlPriceRange[1] || 100),
      ),
    }));
  };

  const filteredData = viewingAll
    ? // apply filters and return categories
      applyFilters()
    : // apply filters and return just items
      applyFilters().flatMap((category) => category.items);

  // set filters as query params in the url
  const setFilters = ({
    categoryFilter,
    textFilter,
    priceRange,
  }: {
    categoryFilter?: string;
    textFilter?: string;
    priceRange?: [number, number];
  }) => {
    // try to get filters from changed values, default to values from url
    const [priceMin, priceMax] = priceRange || urlPriceRange;
    const category = categoryFilter || urlCategory;

    const url = addQueryParams("/browse", {
      text: textFilter ?? urlText,
      // omit default values from url
      category: category === "all" ? undefined : category,
      priceFrom: priceMin || undefined,
      priceTo: priceMax === 100 ? undefined : priceMax,
    });

    router.replace(url);
  };

  return (
    <FiltersContext.Provider
      value={{
        category: urlCategory,
        priceRange: urlPriceRange,
        setFilters: debounce(setFilters),
        viewType,
        setViewType,
        textFilter: urlText,
        filteredData,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
