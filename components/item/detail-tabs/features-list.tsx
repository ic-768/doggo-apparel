import { Card } from "@/components/ui/card";
import { ClothingItem } from "@/lib/types";

export default function FeaturesList({ item }: { item: ClothingItem }) {
  return (
    <Card className="p-4">
      <h3 className="font-semibold">Features</h3>
      <ul className="list-inside list-disc text-gray-600">
        <li>Premium cotton material</li>
        <li>Double-stitched edges for durability</li>
        <li>Adjustable fit for comfort</li>
        <li>Machine washable</li>
        {item.sizes ? <li>Available in multiple sizes</li> : null}
      </ul>
    </Card>
  );
}
