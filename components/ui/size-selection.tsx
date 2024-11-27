import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface SizeSelectionProps {
  sizes: string[];
  size: string;
  setSize: (value: string) => void;
}
export default function SizeSelection({
  sizes,
  size,
  setSize,
}: SizeSelectionProps) {
  return (
    <div className="md:pt-32">
      <h2 className="text-lg font-semibold">Select Size</h2>
      <RadioGroup
        value={size}
        defaultValue={size}
        onValueChange={setSize}
        className="flex flex-wrap gap-4"
      >
        {sizes?.map((s) => {
          return (
            <div key={s} className="flex items-center space-x-2">
              <RadioGroupItem value={s} id={s} />
              <Label htmlFor={s}>{s}</Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
}
