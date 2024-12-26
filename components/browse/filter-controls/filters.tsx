import { Button } from "@/components/ui/button";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ViewType } from "@/hooks/useFilters";
import { clothingCategories } from "@/lib/clothing-categories";

interface FiltersProps {
  category: string;
  setCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  viewType: ViewType;
  setViewType: (viewType: ViewType) => void;
}
export default function Filters({
  category,
  setCategory,
  priceRange,
  setPriceRange,
  viewType,
  setViewType,
}: FiltersProps) {
  return (
    <div className="space-y-6 rounded-lg border p-4 shadow-sm">
      <div>
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

      <div>
        <Label htmlFor="price-range">
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </Label>
        <DualRangeSlider
          id="price-range"
          min={0}
          max={100}
          step={1}
          value={priceRange}
          onValueChange={setPriceRange}
        />

        <Button onClick={() => setViewType("grid")}>Grid</Button>
        <Button onClick={() => setViewType("carousel")}>Carousel</Button>
      </div>
    </div>
  );
}
