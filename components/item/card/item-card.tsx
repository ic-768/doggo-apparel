import { MotionProps } from "framer-motion";
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

type ItemCardProps = {
  image: string | StaticImageData;
  name: string;
  description: string;
  price: number;
  id: number;
} & MotionProps;

export default function ItemCard({
  image,
  name,
  description,
  price,
  id,
  ...props
}: ItemCardProps) {
  return (
    <MotionDiv
      {...props}
      {...fadeIntoView}
      exit={{ opacity: 0 }}
      layoutId={`${id}`}
      transition={{ duration: 0.4 }}
      whileHover={{ rotate: 1 }}
      className="h-full"
    >
      <Card className="flex h-full flex-col">
        <Link className="grow" href={`/item/${id}`}>
          <CardHeader className="p-0">
            <Image alt="name" src={image} {...imageProps} />
          </CardHeader>
          <CardContent className="relative flex grow flex-col gap-2 p-2">
            <div className="flex items-center">
              <CardTitle className="text-md col-span-2 flex items-center">
                {name}
              </CardTitle>
              <PriceTag
                className="absolute -top-10 right-2 col-span-1 ml-auto"
                price={price}
              />
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
