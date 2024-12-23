import { Heart } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { imageProps } from "@/lib/constants";
import { fadeIntoView } from "@/lib/motion";

import CartIndicator from "../ui/cart-indicator";
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
  const isFavorite = false;

  return (
    <MotionDiv {...fadeIntoView} whileHover={{ rotate: 1 }} className="h-full">
      <Card className="h-full flex flex-col">
        <Link className="h-full" href={`/item/${id}`}>
          <CardHeader className="p-0">
            <Image alt="name" src={image} {...imageProps} />
          </CardHeader>
          <CardContent className="p-2 flex flex-col gap-2 grow">
            <div className="flex items-center gap-6">
              <CardTitle>{name}</CardTitle>
              <PriceTag price={price} />
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
          </CardContent>
        </Link>
        <CardFooter className="flex justify-between">
          <button>
            {isFavorite ? <Heart fill="red" stroke="red" /> : <Heart />}
          </button>
          <button>
            <CartIndicator id={id} />
          </button>
        </CardFooter>
      </Card>
    </MotionDiv>
  );
}
