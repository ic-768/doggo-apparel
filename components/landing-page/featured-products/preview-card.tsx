import Image, { StaticImageData } from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import MotionDiv from "@/components/ui/motion/motion-div";
import MotionLink from "@/components/ui/motion/motion-link";
import { imageProps } from "@/lib/constants";
import { fadeIntoView, tapScale } from "@/lib/motion";

interface PreviewCardProps {
  alt: string;
  src: string | StaticImageData;
  title: string;
  description: string;
  id: number;
}

export default function PreviewCard({
  alt,
  src,
  title,
  description,
  id,
}: PreviewCardProps) {
  return (
    <MotionDiv {...fadeIntoView} whileHover={{ scale: 1.05 }}>
      <Card className="flex h-full flex-col">
        <CardHeader className="p-0">
          <Image alt={alt} src={src} {...imageProps} />
        </CardHeader>
        <CardContent className="flex grow flex-col p-4">
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          <p className="grow text-gray-600">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <MotionLink
            {...tapScale}
            href={`item/${id}`}
            prefetch={false}
            className="w-full rounded-full bg-blue-600 p-2 text-center text-white transition-colors hover:bg-blue-700"
          >
            View
          </MotionLink>
        </CardFooter>
      </Card>
    </MotionDiv>
  );
}
