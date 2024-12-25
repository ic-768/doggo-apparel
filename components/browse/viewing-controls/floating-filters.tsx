import { Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import StaticFilters from "./static-filters";

interface FloatingFiltersProps {
  category: string;
  setCategory: (category: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  isGridView: boolean;
  setIsGridView: (isGrid: boolean) => void;
}

export default function FloatingFilters({
  category,
  setCategory,
  priceRange,
  setPriceRange,
  isGridView,
  setIsGridView,
}: FloatingFiltersProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" className="rounded-full shadow-lg">
            <Settings className="h-6 w-6" />
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
            <StaticFilters
              category={category}
              setCategory={setCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              isGridView={isGridView}
              setIsGridView={setIsGridView}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
