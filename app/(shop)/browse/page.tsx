"use client";
import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import AllCategories from "@/components/browse/categories/all";
import Category from "@/components/browse/categories/category";
import Filters from "@/components/browse/viewing-controls/filters";
import MobileFilters from "@/components/browse/viewing-controls/mobile-filters";
import Main from "@/components/ui/main";
import { clothingCategories } from "@/lib/clothing-categories";
import { ClothingItem } from "@/lib/types";
import { getClothingCategoryByName } from "@/lib/utils";

export default function ShopPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCategory = searchParams.get("category") || "All";
  const [category, setCategory] = useState(initialCategory);

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [isGridView, setIsGridView] = useState(true);

  const [_isPending, startTransition] = useTransition();

  const selectedCategory =
    category === "All" ? null : getClothingCategoryByName(category);

  const [filteredItems, setFilteredItems] = useState(
    selectedCategory?.items || [],
  );
  const [filteredCategories, setFilteredCategories] =
    useState(clothingCategories);

  const updateCategory = (newCategory: string) => {
    setCategory(newCategory);
    router.push(`?category=${newCategory}`, { scroll: false });
  };

  const filterItemsByPrice = (
    items: ClothingItem[],
    [min, max]: [number, number],
  ): ClothingItem[] =>
    items.filter((item) => item.price >= min && item.price <= max);

  const handlePriceRangeChange = (newRange: [number, number]) => {
    startTransition(() => {
      selectedCategory
        ? setFilteredItems(filterItemsByPrice(selectedCategory.items, newRange))
        : setFilteredCategories(
            clothingCategories.map((category) => ({
              ...category,
              items: filterItemsByPrice(category.items, newRange),
            })),
          );
    });
    setPriceRange(newRange);
  };

  return (
    <Main>
      <div className="fixed bottom-4 right-4 z-50 lg:hidden">
        <MobileFilters
          category={category}
          setCategory={updateCategory}
          priceRange={priceRange}
          setPriceRange={handlePriceRangeChange}
          isGridView={isGridView}
          setIsGridView={setIsGridView}
        />
      </div>

      <div className="fixed left-4 top-32 hidden w-52 rounded-lg bg-white lg:block">
        <Filters
          category={category}
          setCategory={updateCategory}
          priceRange={priceRange}
          setPriceRange={handlePriceRangeChange}
          isGridView={isGridView}
          setIsGridView={setIsGridView}
        />
      </div>

      <div className="flex flex-col gap-8 lg:pl-52">
        {category === "All" ? (
          <AllCategories categories={filteredCategories} />
        ) : (
          <Category items={filteredItems} />
        )}
      </div>
    </Main>
  );
}
