"use client";

import { Button } from "@/components/ui/button";
import dog from "@/images/glasses/glasses-3.jpg";
import { fadeIntoView } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ShopNow() {
  return (
    <section className="flex flex-col gap-8 items-center py-20 px-4 mx-auto lg:flex-row">
      <div className="flex flex-col gap-8 lg:w-1/2">
        <motion.h1
          className="text-5xl font-bold text-gray-800 lg:text-6xl"
          {...fadeIntoView}
        >
          Dress Your Dog in Style
        </motion.h1>
        <motion.p className="text-xl text-gray-600" {...fadeIntoView}>
          Discover the latest in canine fashion at Doggo Apparel. Because every
          dog deserves to look their best!
        </motion.p>
        <motion.div {...fadeIntoView}>
          <Button className="py-3 px-6 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700">
            Shop Now
          </Button>
        </motion.div>
      </div>
      <motion.div
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
      </motion.div>
    </section>
  );
}
