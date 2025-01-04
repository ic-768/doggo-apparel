import { PawPrint } from "lucide-react";
import Link from "next/link";

import BackToBrowse from "@/components/ui/back-to-browse";
import { Button } from "@/components/ui/button";
import Main from "@/components/ui/main";
import MotionDiv from "@/components/ui/motion/motion-div";
import { fadeIntoView } from "@/lib/motion";

export default function NotFound() {
  return (
    <Main className="items-center">
      <title>Not Found</title>
      <div className="container flex flex-col gap-12">
        <BackToBrowse />
        <MotionDiv
          {...fadeIntoView}
          className="flex flex-col items-center gap-4 py-8 text-center"
        >
          <div className="relative">
            <div className="absolute -left-8 -top-6">
              <PawPrint className="size-12 -rotate-45 text-pink-300" />
            </div>
            <div className="absolute -right-6 top-0">
              <PawPrint className="size-10 rotate-12 text-yellow-500" />
            </div>
            <h1 className="text-6xl font-bold">404</h1>
            <h3 className="text-2xl font-bold text-gray-800">Page Not Found</h3>
          </div>

          <p className="max-w-96 text-muted-foreground">
            Looks like this page has gone for a walk! Don&apos;t worry though,
            you can fetch more pawsome content by heading back to our homepage.
          </p>
          <Button asChild>
            <Link href="/browse">
              <span className="flex items-center gap-2">
                Discover Products
                <span className="text-xl">🐾</span>
              </span>
            </Link>
          </Button>
        </MotionDiv>
      </div>
    </Main>
  );
}
