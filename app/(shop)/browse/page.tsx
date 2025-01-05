import FilterControls from "@/components/browse/filter-controls";
import ViewModes from "@/components/browse/view-modes";
import Main from "@/components/ui/main";
import { FiltersProvider } from "@/context/filters/filters";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const category = (await searchParams).category;

  return (
    <Main>
      <title>{`Browse ${category || ""}`}</title>
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
