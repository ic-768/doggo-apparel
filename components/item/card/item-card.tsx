"use client";
import { motion, MotionProps, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { imageProps } from "@/lib/constants";
import { ClothingItem } from "@/lib/types";

import MotionDiv from "../../ui/motion/motion-div";
import PriceTag from "../price-tag";
import CartButton from "./cart-button";
import FavoritesButton from "./favorites-button";

type ItemCardProps = {
  item: ClothingItem;
  textFilter?: string;
} & MotionProps;

export default function ItemCard({
  item,
  textFilter,
  ...props
}: ItemCardProps) {
  const rotate = useSpring(0);
  if (!item) return;

  const { image, name, description, price, id } = item;

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

  const getHighlightedText = (text: string) => {
    if (!textFilter) return text;

    // Add a literal backslash before each special character ($& is the  matched char)
    const escapedFilter = textFilter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escapedFilter})`, "gi");
    return text.split(regex).map((part, index) => {
      return part.toLowerCase() === textFilter.toLowerCase() ? (
        <span className="relative" key={index}>
          <motion.span
            layoutId={`underline-${id}-${index}`}
            className="absolute bottom-0 left-0 h-0.5 w-full bg-orange-300"
          />
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
            <CardTitle className="text-md">
              {getHighlightedText(name)}
            </CardTitle>

            <p className="text-sm text-muted-foreground">{description}</p>
          </CardContent>
        </Link>
        <CardFooter className="flex justify-between">
          <FavoritesButton id={item.id} />
          <CartButton item={item} />
        </CardFooter>
      </Card>
    </MotionDiv>
  );
}
