import { Heart } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import MotionDiv from "@/components/ui/motion/motion-div";
import { fadeIntoView } from "@/lib/motion";

export default function NoFavorites() {
  return (
    <MotionDiv
      {...fadeIntoView}
      className="flex flex-col items-center py-8 text-center"
    >
      <div className="relative">
        <div className="flex size-24 items-center justify-center rounded-full bg-pink-50">
          <Heart className="size-12 text-pink-500" />
        </div>
        <div className="absolute -bottom-2 -right-2 animate-bounce text-4xl">
          💝
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-2xl font-bold">Your Favorites List is Empty</h3>
        <p className="max-w-96 text-muted-foreground">
          Looks like you haven&apos;t fallen in puppy love with any items yet!
          Start adding your favorite products to create your pawsome collection.
        </p>
        <Button asChild>
          <Link href="/browse">
            <span className="flex items-center gap-2">
              Discover Products
              <span className="text-xl">🐾</span>
            </span>
          </Link>
        </Button>
      </div>
    </MotionDiv>
  );
}
