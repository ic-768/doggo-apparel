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
                &quot;I bought this outfit for my dog&apos;s first Diwali
                celebration, and it was a hit! The fabric is soft and
                breathable, ensuring he was comfortable all day long. Super
                vibrant colors and beautifully intricate designs!&quot;
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
                &quot;This outfit exceeded my expectations! It’s not only
                stylish but also very easy to put on and take off. My dog looked
                so adorable! I&apos;ll definitely be buying more!.&quot;
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
                &quot;These sunglasses are a game-changer for our beach trips!
                They fit my dog perfectly and stay in place, even during our
                most adventurous outings. Not only do they protect his eyes from
                the sun, but they also make him look incredibly cool! I&apos;ve
                received countless compliments, and my pup loves them.&quot;{" "}
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

          <MotionCard {...fadeIntoView} className="bg-white">
            <CardContent className="p-6">
              <p className="mb-4 text-gray-600">
                &quot;I can’t say enough good things about this dog cap! It’s
                not only adorable, but it also keeps my pup cool and protected
                from the sun during our walks. The adjustable strap makes it a
                perfect fit, and the breathable material ensures he stays
                comfortable.&quot;{" "}
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
