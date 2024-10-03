"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import sportOutfit from "@/images/outfits/sporty.jpg";
import { fadeIntoView, tapScale } from "@/lib/motion";
import MotionButton from "../ui/motion/motion-button";

export default function AboutUs() {
  return (
    <section className="py-20">
      <div className="px-4 mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          <motion.div {...fadeIntoView} className="mb-10 lg:mb-0 lg:w-1/2">
            <Image
              className="rounded-lg"
              alt="cutely dressed dog"
              src={sportOutfit}
              width={500}
              height={500}
            />
          </motion.div>
          <motion.div {...fadeIntoView} className="lg:pl-12 lg:w-1/2">
            <h2 className="mb-6 text-4xl font-bold text-gray-800">
              About Doggo Apparel
            </h2>
            <p className="mb-6 text-xl text-gray-600">
              At Doggo Apparel, we believe that every dog deserves to feel
              special. Our mission is to provide high-quality, stylish clothing
              for dogs of all sizes and breeds.
            </p>
            <p className="mb-6 text-xl text-gray-600">
              Founded by dog lovers, we understand the unique bond between
              humans and their furry friends. That&apos;s why we put so much
              care into every piece we create.
            </p>
            <MotionButton
              {...tapScale}
              className="py-3 px-6 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
            >
              Learn More
            </MotionButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
