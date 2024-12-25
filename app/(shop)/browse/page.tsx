"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import AllCategories from "@/components/browse/categories/all";
import Category from "@/components/browse/categories/category";
import Filters from "@/components/browse/viewing-controls/filters";
import MobileFilters from "@/components/browse/viewing-controls/mobile-filters";
import Main from "@/components/ui/main";
import { clothingCategories } from "@/lib/clothing-categories";
import { getClothingCategoryByName } from "@/lib/utils";

// TODO
// export const metadata = {
//   title: "Browse",
// };

export default function ShopPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCategory = searchParams.get("category") || "All";
  const [category, setCategory] = useState(initialCategory);

  const [priceRange, setPriceRange] = useState([0, 100]);
  const [isGridView, setIsGridView] = useState(true);

  const updateCategory = (newCategory: string) => {
    setCategory(newCategory);
    router.push(`?category=${newCategory}`, { scroll: false });
  };

  const selectedCategory =
    category === "All" ? null : getClothingCategoryByName(category);

  const filteredAll = clothingCategories.map((category) => ({
    name: category.name,
    items: category.items.filter((item) => {
      return item.price >= priceRange[0] && item.price <= priceRange[1];
    }),
  }));

  const filteredCategory = selectedCategory?.items.filter((item) => {
    return item.price >= priceRange[0] && item.price <= priceRange[1];
  });

  return (
    <Main>
      <div className="fixed bottom-4 right-4 z-50 lg:hidden">
        <MobileFilters
          category={category}
          setCategory={updateCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          isGridView={isGridView}
          setIsGridView={setIsGridView}
        />
      </div>

      <div className="fixed left-4 top-32 hidden w-52 rounded-lg bg-white lg:block">
        <Filters
          category={category}
          setCategory={updateCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          isGridView={isGridView}
          setIsGridView={setIsGridView}
        />
      </div>

      <div className="flex flex-col gap-8 lg:pl-52">
        {category === "All" ? (
          <AllCategories categories={filteredAll} />
        ) : (
          <Category items={filteredCategory} />
        )}
      </div>
    </Main>
  );
}
