import { ClothingItem } from "@/lib/types";
import { Card } from "../ui/card";

export default function FeaturesList({ item }: { item: ClothingItem }) {
  return (
    <Card className="p-4">
      <h3 className="font-semibold">Features</h3>
      <ul className="list-disc list-inside text-gray-600">
        <li>Premium cotton material</li>
        <li>Double-stitched edges for durability</li>
        <li>Adjustable fit for comfort</li>
        <li>Machine washable</li>
        {item.sizes ? <li>Available in multiple sizes</li> : null}
      </ul>
    </Card>
  );
}
