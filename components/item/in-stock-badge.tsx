import { Badge } from "../ui/badge";

export default function InStockBadge() {
  return (
    <Badge
      variant="secondary"
      className="px-2 py-1 outline outline-1 outline-neutral-300"
    >
      In Stock
    </Badge>
  );
}
