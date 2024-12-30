"use client";
import { MotionProps, useSpring } from "framer-motion";
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
  withEnterAnimation?: boolean;
} & MotionProps;

export default function ItemCard({
  image,
  name,
  description,
  price,
  id,
  ...props
}: ItemCardProps) {
  const springyRotate = useSpring(0);

  // tilt card left or right depending on mouse position - fun!
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const halfWidth = card.width / 2;
    const cardCenterX = card.left + halfWidth;
    const mouseX = e.clientX;
    const distanceFromCenter = mouseX - cardCenterX;
    const maxRotation = 3; // rotation in degrees
    const rotation = (distanceFromCenter / halfWidth) * maxRotation;
    springyRotate.set(rotation);
  };

  const handleMouseLeave = () => {
    springyRotate.set(0);
  };

  return (
    <MotionDiv
      {...props}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      exit={{ opacity: 0 }}
      layoutId={`${id}`}
      transition={{ duration: 0.4 }}
      style={{ rotate: springyRotate }}
      className="h-full"
    >
      <Card className="flex h-full flex-col">
        <Link className="grow" href={`/item/${id}`}>
          <CardHeader className="relative p-0">
            <Image alt="name" src={image} {...imageProps} />

            <PriceTag
              className="absolute bottom-2 right-2 col-span-1 ml-auto"
              price={price}
            />
          </CardHeader>
          <CardContent className="flex grow flex-col gap-2 p-2">
            <div className="flex items-center">
              <CardTitle className="text-md col-span-2 flex items-center">
                {name}
              </CardTitle>
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
