import { twMerge } from "tailwind-merge";

import { Badge } from "../ui/badge";

interface PriceTagProps {
  price: number;
  className?: string;
}
export default function PriceTag({ className, price }: PriceTagProps) {
  const classes = twMerge(
    "text-lg font-semibold outline outline-1 outline-neutral-300",
    className,
  );

  return (
    <Badge variant="secondary" className={classes}>
      ${price.toFixed(2)}
    </Badge>
  );
}
