import Link from "next/link";

import { fadeIntoView } from "@/lib/motion";

import { Button } from "../ui/button";
import MotionDiv from "../ui/motion/motion-div";
import H1P from "../ui/motion/motion-h";
import MotionP from "../ui/motion/motion-p";
import ImageComparison from "./image-comparison";

export default function ShopNow() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-8 px-4 pb-12 text-center sm:text-start lg:flex-row">
      <div className="flex flex-col items-center gap-8 lg:w-1/2">
        <H1P
          className="font-galada text-5xl font-bold text-gray-800 lg:text-6xl"
          {...fadeIntoView}
        >
          Doggo Apparel
        </H1P>
        <MotionP className="text-xl text-gray-600" {...fadeIntoView}>
          Discover the latest in canine fashion at Doggo Apparel. Because every
          dog deserves to look their best!
        </MotionP>
        <Button
          className="rounded-full bg-blue-600 text-lg font-bold duration-1000"
          asChild
          effect="shine"
        >
          <Link href="/browse">Shop Now</Link>
        </Button>
      </div>
      <MotionDiv
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ImageComparison />
      </MotionDiv>
    </section>
  );
}
