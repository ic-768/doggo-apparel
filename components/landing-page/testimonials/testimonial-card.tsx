import Image, { StaticImageData } from "next/image";

import { CardContent } from "@/components/ui/card";
import MotionCard from "@/components/ui/motion/motion-card";
import { fadeIntoView } from "@/lib/motion";

interface TestimonialCardProps {
  quote: string;
  image: string | StaticImageData;
  name: string;
}

export default function TestimonialCard({
  quote,
  image,
  name,
}: TestimonialCardProps) {
  return (
    <MotionCard {...fadeIntoView} className="bg-white">
      <CardContent className="flex h-full flex-col gap-2 p-6">
        <p className="grow text-gray-600">&quot;{quote}&quot;</p>
        <div className="flex items-center">
          <Image
            width={50}
            height={50}
            src={image}
            alt="Customer 1"
            className="mr-4 h-12 w-12 rounded-full"
          />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-gray-250 text-sm">Dog Parent</p>
          </div>
        </div>
      </CardContent>
    </MotionCard>
  );
}
