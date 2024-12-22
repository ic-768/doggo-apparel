import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fadeIntoView } from "@/lib/motion";
import { imageProps } from "@/lib/constants";
import Link from "next/link";
import MotionDiv from "../ui/motion/motion-div";
import PriceTag from "./price-tag";

interface ItemCardProps {
  image: string | StaticImageData;
  name: string;
  description: string;
  price: number;
  id: number;
}

export default function ItemCard({
  image,
  name,
  description,
  price,
  id,
}: ItemCardProps) {
  return (
    <Link className="h-full" href={`/item/${id}`}>
      <MotionDiv
        {...fadeIntoView}
        whileHover={{ rotate: 1 }}
        className="h-full"
      >
        <Card className="h-full">
          <CardHeader className="p-0">
            <Image alt="name" src={image} {...imageProps} />
          </CardHeader>
          <CardContent className="p-2">
            <CardTitle>{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{description}</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <PriceTag price={price} />
          </CardFooter>
        </Card>
      </MotionDiv>
    </Link>
  );
}
