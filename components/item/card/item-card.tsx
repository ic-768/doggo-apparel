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

import MotionDiv from "../../ui/motion/motion-div";
import PriceTag from "../price-tag";
import CartButton from "./cart-button";
import FavoritesButton from "./favorites-button";

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
    <MotionDiv {...fadeIntoView} whileHover={{ rotate: 1 }} className="h-full">
      <Card className="flex h-full flex-col">
        <Link className="grow" href={`/item/${id}`}>
          <CardHeader className="p-0">
            <Image alt="name" src={image} {...imageProps} />
          </CardHeader>
          <CardContent className="flex grow flex-col gap-2 p-2">
            <div className="flex items-center gap-6">
              <CardTitle>{name}</CardTitle>
              <PriceTag price={price} />
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
          </CardContent>
        </Link>
        <CardFooter className="flex justify-between">
          <FavoritesButton id={id} />
          <CartButton id={id} />
        </CardFooter>
      </Card>
    </MotionDiv>
  );
}
