import Image from "next/image";

import sportOutfit from "@/images/outfits/sporty.jpg";
import { fadeIntoView, tapScale } from "@/lib/motion";

import MotionButton from "../ui/motion/motion-button";
import MotionDiv from "../ui/motion/motion-div";

export default function AboutUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto flex flex-col items-center px-4 lg:flex-row">
        <MotionDiv {...fadeIntoView} className="mb-10 lg:mb-0 lg:w-1/2">
          <Image
            className="rounded-lg"
            alt="cutely dressed dog"
            src={sportOutfit}
            width={500}
            height={500}
          />
        </MotionDiv>
        <MotionDiv
          {...fadeIntoView}
          className="flex flex-col items-center lg:w-1/2 lg:pl-12"
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-800">
            About Doggo Apparel
          </h2>
          <p className="mb-6 text-xl text-gray-600">
            At Doggo Apparel, we believe that every dog deserves to feel
            special. Our mission is to provide high-quality, stylish clothing
            for dogs of all sizes and breeds.
          </p>
          <p className="mb-6 text-xl text-gray-600">
            Founded by dog lovers, we understand the unique bond between humans
            and their furry friends. That&apos;s why we put so much care into
            every piece we create.
          </p>
          <MotionButton
            {...tapScale}
            className="rounded-full bg-blue-600 px-6 py-3 text-lg font-bold text-white hover:bg-blue-700"
          >
            Learn More
          </MotionButton>
        </MotionDiv>
      </div>
    </section>
  );
}
