"use client";

import FilterControls from "@/components/browse/filter-controls";
import ViewModes from "@/components/browse/view-modes";
import Main from "@/components/ui/main";
import { useFilters } from "@/hooks/useFilters";

export default function ShopPage() {
  const {
    category,
    priceRange,
    filteredData,
    setCategory,
    setPriceRange,
    viewType,
    setViewType,
    textFilter,
    setTextFilter,
  } = useFilters();

  return (
    <Main>
      <title>{`Browse ${category}`}</title>
      <div className="container">
        <FilterControls
          category={category}
          priceRange={priceRange}
          filteredData={filteredData}
          setCategory={setCategory}
          setPriceRange={setPriceRange}
          viewType={viewType}
          setViewType={setViewType}
          textFilter={textFilter}
          setTextFilter={setTextFilter}
        />
        <div className="flex flex-col gap-8 lg:pl-56">
          <ViewModes
            viewType={viewType}
            filteredData={filteredData}
            category={category}
          />
        </div>
      </div>
    </Main>
  );
}
