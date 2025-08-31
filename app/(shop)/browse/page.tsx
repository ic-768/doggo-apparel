import { Metadata } from "next";

import Main from "@/components/ui/main";
import { FiltersProvider } from "@/context/filters/filters";
import { createClient } from "@/lib/supabase";

import FilterControls from "./components/filter-controls";
import ViewModes from "./components/view-modes";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}): Promise<Metadata> {
  const { category = "" } = await searchParams;
  return {
    title: `Browse ${category}`,
  };
}

export default async function ShopPage() {
  const supabase = await createClient();
  const { data: categories, error } = await supabase.from("categories").select(`
    id,
    name,
    clothing_items (
      id,
      name,
      price,
      description,
      image_url,
      sizes
    )
  `);

  return (
    <Main>
      <div className="container">
        <FiltersProvider allCategories={categories || []}>
          <FilterControls />
          <div className="flex flex-col gap-8 lg:pl-56">
            <ViewModes />
          </div>
        </FiltersProvider>
      </div>
    </Main>
  );
}
