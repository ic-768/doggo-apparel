import { useFilters } from "@/hooks/useFilters";

import Filters from "./filters";
import MobileFilters from "./mobile-filters";

export default function FilterControls(props: ReturnType<typeof useFilters>) {
  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 lg:hidden">
        <MobileFilters {...props} />
      </div>

      <div className="fixed left-8 top-32 hidden w-52 rounded-lg bg-white lg:block">
        <Filters {...props} />
      </div>
    </>
  );
}
