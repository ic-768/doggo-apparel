"use client";

import AllCategories from "@/components/browse/categories/all";
import Category from "@/components/browse/categories/category";
import Filters from "@/components/browse/viewing-controls/filters";
import MobileFilters from "@/components/browse/viewing-controls/mobile-filters";
import Main from "@/components/ui/main";
import { useFilters } from "@/hooks/useFilters";

export default function ShopPage() {
  const {
    category,
    priceRange,
    filteredItems,
    filteredCategories,
    updateCategory,
    handlePriceRangeChange,
  } = useFilters();

  const view =
    category === "All" ? (
      <AllCategories categories={filteredCategories} />
    ) : (
      <Category items={filteredItems} />
    );

  return (
    <Main>
      <div className="fixed bottom-4 right-4 z-50 lg:hidden">
        <MobileFilters
          category={category}
          setCategory={updateCategory}
          priceRange={priceRange}
          setPriceRange={handlePriceRangeChange}
        />
      </div>

      <div className="fixed left-4 top-32 hidden w-52 rounded-lg bg-white lg:block">
        <Filters
          category={category}
          setCategory={updateCategory}
          priceRange={priceRange}
          setPriceRange={handlePriceRangeChange}
        />
      </div>

      <div className="flex flex-col gap-8 lg:pl-52">{view}</div>
    </Main>
  );
}
