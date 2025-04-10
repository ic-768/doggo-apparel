import { ShoppingCart } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import MotionDiv from "@/components/ui/motion/motion-div";
import { fadeIntoView } from "@/lib/motion";

export default function NoCartItems() {
  return (
    <MotionDiv
      {...fadeIntoView}
      className="flex flex-col items-center gap-4 py-8 text-center"
    >
      <div className="relative">
        <div className="flex size-24 items-center justify-center rounded-full bg-yellow-50">
          <ShoppingCart className="size-12 text-yellow-500" />
        </div>
        <div className="absolute -bottom-2 -right-2 text-4xl">🐶</div>
      </div>
      <h3 className="text-2xl font-bold">Your Cart is Feeling Lonely</h3>
      <p className="max-w-96 text-muted-foreground">
        Oops! Looks like your shopping cart is as empty as a dog&apos;s water
        bowl on a hot day. Let&apos;s fill it up with some tail-wagging goodies!
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button asChild>
          <Link href="/browse">
            <span className="flex items-center gap-2">
              Start Shopping
              <span className="text-xl">🛍️</span>
            </span>
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/favorites">
            <span className="flex items-center gap-2">
              View Favorites
              <span className="text-xl">❤️</span>
            </span>
          </Link>
        </Button>
      </div>
      <div className="flex items-center gap-2 text-2xl text-muted-foreground">
        <span>🦴</span>
        <span className="animate-pulse text-sm">Fetching great deals...</span>
        <span>🐾</span>
      </div>
    </MotionDiv>
  );
}
