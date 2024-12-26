import { Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ViewType } from "@/hooks/useFilters";

import Filters from "./filters";

interface MobileFiltersProps {
  category: string;
  setCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  viewType: ViewType;
  setViewType: (viewType: ViewType) => void;
}

export default function MobileFilters({
  category,
  setCategory,
  priceRange,
  setPriceRange,
  viewType,
  setViewType,
}: MobileFiltersProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="size-14 rounded-full shadow-lg outline outline-1 outline-neutral-300"
        >
          <Settings className="size-10" />
        </Button>
      </SheetTrigger>
      <SheetContent
        title="test"
        side="bottom"
        className="flex h-96 flex-col gap-4"
      >
        <SheetTitle>Filters</SheetTitle>
        <SheetDescription>Narrow down the displayed results</SheetDescription>
        <div className="h-full overflow-y-auto">
          <Filters
            category={category}
            setCategory={setCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            viewType={viewType}
            setViewType={setViewType}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
