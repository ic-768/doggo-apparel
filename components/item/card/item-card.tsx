"use client";
import { motion, MotionProps, useSpring } from "framer-motion";
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
  textFilter,
  ...props
}: ItemCardProps) {
  const rotate = useSpring(0);

  // tilt card left or right depending on mouse position - fun!
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const halfWidth = card.width / 2;
    const cardCenterX = card.left + halfWidth;
    const mouseX = e.clientX;
    const distanceFromCenter = mouseX - cardCenterX;
    const maxRotation = 2; // rotation in degrees
    const rotation = (distanceFromCenter / halfWidth) * maxRotation;
    rotate.set(rotation);
  };

  const handleMouseLeave = () => {
    rotate.set(0);
  };

  // relative initial span for matches, with an underline element for full width.
  // animate width transition
  const getHighlightedText = (text: string) => {
    if (!textFilter) return text;

    const regex = new RegExp(`(${textFilter})`, "gi");
    return text.split(regex).map((part, index) => {
      return part.toLowerCase() === textFilter.toLowerCase() ? (
        <span className="relative" key={index}>
          <motion.span
            layoutId={`underline-${id}-${index}`}
            className="absolute bottom-0 left-0 h-0.5 w-full bg-orange-300"
          ></motion.span>
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      );
    });
  };

  return (
    <MotionDiv
      {...props}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      exit={{ opacity: 0 }}
      layoutId={`${id}`}
      transition={{ duration: 0.4 }}
      style={{ rotate }}
      className="h-96"
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
            <CardTitle className="text-md">
              {getHighlightedText(name)}
            </CardTitle>

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
