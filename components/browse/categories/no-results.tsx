import { SearchX } from "lucide-react";

import MotionDiv from "@/components/ui/motion/motion-div";
import { fadeIntoView } from "@/lib/motion";

export default function NoResults() {
  return (
    <MotionDiv
      {...fadeIntoView}
      className="flex flex-col items-center py-8 text-center"
    >
      <div className="relative">
        <div className="flex size-24 items-center justify-center rounded-full bg-primary/10">
          <SearchX className="size-12 text-primary" />
        </div>
        <div className="absolute -bottom-2 -right-2 text-4xl">🐾</div>
      </div>
      <div className="flex flex-col items-center gap-2 pt-6">
        <h3 className="text-2xl font-bold">Ruh-roh! No matches found</h3>
        <p className="max-w-96 text-muted-foreground">
          Our furry friends couldn&apos;t fetch any items matching your filters.
          Try adjusting your search!
        </p>
        <div className="flex items-center gap-2 text-2xl text-muted-foreground">
          <span>🐕</span>
          <span className="animate-bounce text-sm">•••</span>
          <span>🦴</span>
        </div>
      </div>
    </MotionDiv>
  );
}
