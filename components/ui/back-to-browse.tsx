import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function BackToBrowse() {
  return (
    <Button
      className="self-start p-0"
      variant="link"
      effect="expandIcon"
      icon={ArrowLeftIcon}
      iconPlacement="left"
      asChild
    >
      <Link href="/browse">
        <span>Back to Browse</span>
      </Link>
    </Button>
  );
}
