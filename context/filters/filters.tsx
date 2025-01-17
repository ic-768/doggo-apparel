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
  const urlPriceFrom = Number(searchParams.get("priceFrom") || 0);
  const urlPriceTo = Number(searchParams.get("priceTo") || 100);

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
          item.price >= Number(urlPriceFrom || 0) &&
          item.price <= Number(urlPriceTo || 100),
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
    const [priceMin, priceMax] = priceRange || [urlPriceFrom, urlPriceTo];

    const url = addQueryParams("/browse", {
      category: categoryFilter === "all" ? undefined : categoryFilter,
      text: textFilter ?? urlText,
      // if 0 then ignore
      priceFrom: priceMin || undefined,
      // if 100 then ignore
      priceTo: priceMax === 100 ? undefined : urlPriceTo,
    });

    router.replace(url);
  };

  return (
    <FiltersContext.Provider
      value={{
        category: urlCategory,
        priceRange: [urlPriceFrom, urlPriceTo],
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
