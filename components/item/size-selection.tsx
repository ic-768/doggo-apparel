import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
    <div>
      <h2 className="text-lg font-semibold">Select Size</h2>
      <RadioGroup
        value={size}
        defaultValue={size}
        onValueChange={setSize}
        className="flex flex-wrap gap-4"
      >
        {sizes?.map((s) => {
          return (
            <Label
              key={s}
              className="flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:border-blue-500 [&:has(:checked)]:bg-blue-100"
            >
              <RadioGroupItem value={s} id={s} />
              {s}
            </Label>
          );
        })}
      </RadioGroup>
    </div>
  );
}
