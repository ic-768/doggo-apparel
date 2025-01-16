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

  const category = searchParams.get("category") || "all";
  const text = searchParams.get("text") || "";
  const priceFrom = searchParams.get("priceFrom") || 0;
  const priceTo = searchParams.get("priceTo") || 100;

  const [viewType, setViewType] = useState<ViewType>("grid");
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
          item.name.toLowerCase().includes(text.toLowerCase()) &&
          item.price >= Number(priceFrom || 0) &&
          item.price <= Number(priceTo || 100),
      ),
    }));
  };

  const filteredData = viewingAll
    ? // apply filters and return categories
      applyFilters()
    : // apply filters and return just items
      applyFilters().flatMap((category) => category.items);

  const setFilters = ({
    categoryFilter,
    textFilter,
    priceRange,
  }: {
    categoryFilter?: string;
    textFilter?: string;
    priceRange?: [number, number];
  }) => {
    const url = addQueryParams("/browse", {
      category: categoryFilter ?? category,
      text: textFilter ?? text,
      priceFrom: priceRange?.[0] ?? priceFrom,
      priceTo: priceRange?.[1] ?? priceTo,
    });

    router.replace(url);
  };

  return (
    <FiltersContext.Provider
      value={{
        category,
        priceRange: [Number(priceFrom || 0), Number(priceTo || 100)],
        setFilters: debounce(setFilters),
        viewType,
        setViewType,
        textFilter: text,
        filteredData,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
