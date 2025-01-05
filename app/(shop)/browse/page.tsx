import FilterControls from "@/components/browse/filter-controls";
import ViewModes from "@/components/browse/view-modes";
import Main from "@/components/ui/main";
import { FiltersProvider } from "@/context/filters/filters";

// or Dynamic metadata
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
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
