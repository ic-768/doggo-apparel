import { useState } from "react";

import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import { Label } from "@/components/ui/label";

interface PriceRangeSliderProps {
  priceRange: [number, number];
  setFilters: ({ priceRange }: { priceRange?: [number, number] }) => void;
}

export default function PriceRangeSlider({
  priceRange,
  setFilters,
}: PriceRangeSliderProps) {
  // to keep track of pricing without being held back by the debounced priceRange value
  const [realTimeValue, setRealTimeValue] = useState(priceRange);

  const onChange = (v: [number, number]) => {
    // update for ui
    setRealTimeValue(v);
    // debounced call
    setFilters({ priceRange: v });
  };
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="price-range">
        Price range: ${realTimeValue[0]} - ${realTimeValue[1]}
      </Label>
      <DualRangeSlider
        id="price-range"
        min={0}
        max={100}
        step={1}
        value={realTimeValue}
        onValueChange={onChange}
      />
    </div>
  );
}
