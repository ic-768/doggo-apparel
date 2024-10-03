"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { CardContent } from "@/components/ui/card";
import selfie1 from "@/images/user-selfies/selfie-1.jpg";
import selfie2 from "@/images/user-selfies/selfie-2.jpg";
import selfie3 from "@/images/user-selfies/selfie-3.webp";
import { fadeIntoView } from "@/lib/motion";

import MotionCard from "../ui/motion/motion-card";

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="flex flex-col gap-12 px-4 mx-auto">
        <motion.h2
          {...fadeIntoView}
          className="text-4xl font-bold text-center text-gray-800"
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <MotionCard {...fadeIntoView} className="bg-white">
            <CardContent className="p-6">
              <p className="mb-4 text-gray-600">
                &quot;My dog looks absolutely adorable in their new outfit from
                Doggo Apparel! The quality is amazing.&quot;
              </p>
              <div className="flex 1s-center">
                <Image
                  width={50}
                  height={50}
                  src={selfie1}
                  alt="Customer 1"
                  className="mr-4 w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">Happy Customer 1</p>
                  <p className="text-sm text-gray-250">Dog Parent</p>
                </div>
              </div>
            </CardContent>
          </MotionCard>
          <MotionCard {...fadeIntoView} className="bg-white">
            <CardContent className="p-6">
              <p className="mb-4 text-gray-600">
                &quot;My dog looks absolutely adorable in their new outfit from
                Doggo Apparel! The quality is amazing.&quot;
              </p>
              <div className="flex 2s-center">
                <Image
                  width={50}
                  height={50}
                  src={selfie2}
                  alt="Customer 2"
                  className="mr-4 w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">Happy Customer 2</p>
                  <p className="text-sm text-gray-250">Dog Parent</p>
                </div>
              </div>
            </CardContent>
          </MotionCard>
          <MotionCard {...fadeIntoView} className="bg-white">
            <CardContent className="p-6">
              <p className="mb-4 text-gray-600">
                &quot;My dog looks absolutely adorable in their new outfit from
                Doggo Apparel! The quality is amazing.&quot;
              </p>
              <div className="flex 3s-center">
                <Image
                  width={50}
                  height={50}
                  src={selfie3}
                  alt="Customer 3"
                  className="mr-4 w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">Happy Customer 3</p>
                  <p className="text-sm text-gray-250">Dog Parent</p>
                </div>
              </div>
            </CardContent>
          </MotionCard>
        </div>
      </div>
    </section>
  );
}
