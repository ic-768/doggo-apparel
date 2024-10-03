"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { fadeIntoView } from "@/lib/motion";
import MotionButton from "@/components/ui/motion/motion-button";

const imageProps = {
  className: "w-full rounded-lg",
  width: 500,
  height: 500,
};

interface PreviewCardProps {
  alt: string;
  src: string | StaticImageData;
  title: string;
  description: string;
}

export default function PreviewCard({
  alt,
  src,
  title,
  description,
}: PreviewCardProps) {
  return (
    <motion.div {...fadeIntoView} whileHover={{ scale: 1.05 }}>
      <Card>
        <CardContent className="p-4">
          <Image alt={alt} src={src} {...imageProps} />
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          <p className="mb-4 text-gray-600">{description}</p>
          <MotionButton
            whileTap={{ scale: 0.95 }}
            className="w-full text-white bg-blue-600 hover:bg-blue-700"
          >
            View
          </MotionButton>
        </CardContent>
      </Card>
    </motion.div>
  );
}
