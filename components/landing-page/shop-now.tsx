import dog from "@/images/glasses/glasses-3.jpg";
import { fadeIntoView } from "@/lib/motion";
import Image from "next/image";
import Link from "next/link";
import MotionP from "../ui/motion/motion-p";
import H1P from "../ui/motion/motion-h";
import MotionDiv from "../ui/motion/motion-div";

export default function ShopNow() {
  return (
    <section className="container flex flex-col gap-8 items-center py-20 px-4 mx-auto lg:flex-row">
      <div className="flex flex-col gap-8 lg:w-1/2">
        <H1P
          className="text-5xl font-bold text-gray-800 lg:text-6xl"
          {...fadeIntoView}
        >
          Dress Your Dog in Style
        </H1P>
        <MotionP className="text-xl text-gray-600" {...fadeIntoView}>
          Discover the latest in canine fashion at Doggo Apparel. Because every
          dog deserves to look their best!
        </MotionP>
        <Link
          className="self-start py-3 px-6 text-lg font-bold text-white bg-blue-600 rounded-full transition-colors hover:bg-blue-700"
          href="/browse"
        >
          Shop Now
        </Link>
      </div>
      <MotionDiv
        className="lg:w-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          className="rounded-lg"
          alt="cutely dressed dog"
          src={dog}
          width={500}
          height={500}
        />
      </MotionDiv>
    </section>
  );
}
