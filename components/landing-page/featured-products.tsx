"use client";

import batdog from "@/images/outfits/batman.jpg";
import bernard from "@/images/outfits/indian-bernard.jpg";
import hat11 from "@/images/hats/hat-11.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import MotionButton from "../ui//motion/motion-button";

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="flex flex-col gap-12 px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent className="p-4">
                <Image
                  className="w-full rounded-lg"
                  alt="cutely dressed dog"
                  src={hat11}
                  width={500}
                  height={500}
                />
                <h3 className="mb-2 text-xl font-semibold">
                  Fancy Dog Outfit 1
                </h3>
                <p className="mb-4 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <MotionButton
                  whileTap={{ scale: 0.95 }}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700"
                >
                  View
                </MotionButton>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent className="p-4">
                <Image
                  className="w-full rounded-lg"
                  alt="cutely dressed dog"
                  src={batdog}
                  width={500}
                  height={500}
                />
                <h3 className="mb-2 text-xl font-semibold">
                  Fancy Dog Outfit 2
                </h3>
                <p className="mb-4 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <MotionButton
                  whileTap={{ scale: 0.95 }}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700"
                >
                  View
                </MotionButton>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent className="p-4">
                <Image
                  className="w-full rounded-lg"
                  alt="cutely dressed dog"
                  src={bernard}
                  width={500}
                  height={500}
                />
                <h3 className="mb-2 text-xl font-semibold">
                  Fancy Dog Outfit 3
                </h3>
                <p className="mb-4 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <MotionButton
                  whileTap={{ scale: 0.95 }}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700"
                >
                  View
                </MotionButton>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
