import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { clothingCategories } from "@/lib/clothing-categories";

interface FiltersProps {
  category: string;
  setCategory: (category: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  isGridView: boolean;
  setIsGridView: (isGrid: boolean) => void;
}
export default function Filters({
  category,
  setCategory,
  priceRange,
  setPriceRange,
  isGridView,
  setIsGridView,
}: FiltersProps) {
  return (
    <div className="space-y-6 rounded-lg border p-4 shadow-sm">
      <div>
        <Label htmlFor="category-select">Category</Label>
        <Select value={category || "All"} onValueChange={setCategory}>
          <SelectTrigger id="category-select">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent title="Categories">
            <SelectItem value="All">All</SelectItem>
            {clothingCategories.map(({ name }) => (
              <SelectItem key={name} value={name}>
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
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="view-toggle"
          checked={isGridView}
          onCheckedChange={setIsGridView}
        />
        <Label htmlFor="view-toggle">
          {isGridView ? "Grid View" : "Carousel View"}
        </Label>
      </div>
    </div>
  );
}
