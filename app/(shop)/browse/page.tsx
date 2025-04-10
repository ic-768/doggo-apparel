import Main from "@/components/ui/main";
import { FiltersProvider } from "@/context/filters/filters";

import FilterControls from "./components/filter-controls";
import ViewModes from "./components/view-modes";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category = "" } = await searchParams;
  return {
    title: `Browse ${category}`,
  };
}

export default async function ShopPage() {
  return (
    <Main>
      <div className="container">
        <FiltersProvider>
          <FilterControls />
          <div className="flex flex-col gap-8 lg:pl-56">
            <ViewModes />
          </div>
        </FiltersProvider>
      </div>
    </Main>
  );
}
