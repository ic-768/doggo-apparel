import { Card } from "@/components/ui/card";

export default function InstructionsList() {
  return (
    <Card className="p-4">
      <h3 className="font-semibold">Care Instructions</h3>
      <ul className="list-inside list-disc text-gray-600">
        <li>Machine wash cold</li>
        <li>Tumble dry low</li>
        <li>Do not bleach</li>
        <li>Iron on low if needed</li>
      </ul>
    </Card>
  );
}
