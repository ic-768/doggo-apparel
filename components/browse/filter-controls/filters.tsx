import { LayoutGrid, RefreshCcw } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ViewType } from "@/hooks/useFilters";
import { clothingCategories } from "@/lib/clothing-categories";

import PriceRangeSlider from "./price-range-slider";

interface FiltersProps {
  category: string;
  setCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  viewType: ViewType;
  setViewType: (viewType: ViewType) => void;
  textFilter: string;
  setTextFilter: (text: string) => void;
}

export default function Filters({
  category,
  setCategory,
  priceRange,
  setPriceRange,
  viewType,
  setViewType,
  setTextFilter,
}: FiltersProps) {
  const isGrid = viewType === "grid";

  return (
    <div className="flex flex-col gap-6 rounded-lg border p-4 shadow-sm">
      <div className="flex flex-col gap-2">
        <Label htmlFor="category-select">Category</Label>
        <Select value={category || "all"} onValueChange={setCategory}>
          <SelectTrigger id="category-select">
            <SelectValue placeholder="all" />
          </SelectTrigger>
          <SelectContent title="Categories">
            <SelectItem value="all">All</SelectItem>
            {clothingCategories.map(({ name }) => (
              <SelectItem key={name} value={name.toLowerCase()}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="view-mode">Search by name</Label>
        <Input
          id="text-filter"
          onChange={(e) => setTextFilter(e.target.value)}
        />
      </div>

      <PriceRangeSlider priceRange={priceRange} setPriceRange={setPriceRange} />
      <div className="flex flex-col gap-2">
        <Label htmlFor="view-mode">View mode ({viewType})</Label>
        <div className="flex items-center gap-2">
          <RefreshCcw
            className={`size-5 ${!isGrid ? "text-primary" : "text-muted-foreground"}`}
            aria-hidden="true"
          />
          <Switch
            id="view-mode"
            checked={isGrid}
            onCheckedChange={(v) => setViewType(v ? "grid" : "carousel")}
            aria-label="Toggle between grid and carousel view"
          />
          <LayoutGrid
            className={`size-5 ${isGrid ? "text-primary" : "text-muted-foreground"}`}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
