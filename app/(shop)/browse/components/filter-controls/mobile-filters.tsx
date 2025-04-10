import { Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Filters from "./filters";

export default function MobileFilters() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="size-14 rounded-full shadow-lg outline outline-1 outline-neutral-300"
        >
          <Settings className="size-10" />
        </Button>
      </SheetTrigger>
      <SheetContent
        title="test"
        side="bottom"
        className="flex h-[27rem] flex-col gap-4"
      >
        <SheetTitle>Filters</SheetTitle>
        <SheetDescription>Narrow down the displayed results</SheetDescription>
        <div className="overflow-y-auto">
          <Filters />
        </div>
      </SheetContent>
    </Sheet>
  );
}
