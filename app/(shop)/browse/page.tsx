"use client";

import AllCategories from "@/components/browse/category-carousel";
import FilterControls from "@/components/browse/filter-controls";
import ItemList from "@/components/item-list/item-list";
import Main from "@/components/ui/main";
import { useFilters } from "@/hooks/useFilters";
import { ClothingCategories, ClothingItem } from "@/lib/types";

export default function ShopPage() {
  const { category, priceRange, filteredData, setCategory, setPriceRange } =
    useFilters();

  const view =
    category === "all" ? (
      <AllCategories categories={filteredData as ClothingCategories} />
    ) : (
      <ItemList items={filteredData as ClothingItem[]} />
    );

  return (
    <Main>
      <title>{`Browse ${category}`}</title>
      <FilterControls
        category={category}
        priceRange={priceRange}
        filteredData={filteredData}
        setCategory={setCategory}
        setPriceRange={setPriceRange}
      />
      <div className="flex flex-col gap-8 lg:pl-52">{view}</div>
    </Main>
  );
}
