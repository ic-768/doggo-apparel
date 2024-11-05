import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { fadeIntoView, tapScale } from "@/lib/motion";
import MotionButton from "@/components/ui/motion/motion-button";
import { imageProps } from "@/lib/constants";
import MotionDiv from "@/components/ui/motion/motion-div";

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
    <MotionDiv {...fadeIntoView} whileHover={{ scale: 1.05 }}>
      <Card className="h-full">
        <CardContent className="flex flex-col p-4 h-full">
          <Image alt={alt} src={src} {...imageProps} />
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          <p className="flex-grow mb-4 text-gray-600">{description}</p>
          <MotionButton
            {...tapScale}
            className="w-full text-white bg-blue-600 hover:bg-blue-700"
          >
            View
          </MotionButton>
        </CardContent>
      </Card>
    </MotionDiv>
  );
}
