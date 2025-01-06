"use client";

import { Heart } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { useFavorites } from "@/context/favorites/use-favorites";
import { useIdleAnimation } from "@/hooks/useTimer";

import NumberBubble from "./number-bubble";

interface FavoritesIndicatorProps {
  id?: number;
  rotateOnIdle?: boolean;
  className?: string;
}

export default function FavoritesIndicator({
  id,
  rotateOnIdle = false,
  className,
}: FavoritesIndicatorProps) {
  const { favorites, isFavorite } = useFavorites();

  const showNum = id === undefined;
  const numToShow = favorites?.length || 0;

  const isFavorited = id !== undefined && isFavorite(id);

  const iconProps = isFavorited ? { fill: "red", stroke: "red" } : undefined;

  const animate = useIdleAnimation(rotateOnIdle && !isFavorited);

  if (favorites === null) return;

  const classes = twMerge(
    "relative flex size-full items-center justify-center",
    className,
  );

  return (
    <div className={classes}>
      {showNum && !!numToShow && <NumberBubble number={numToShow} />}
      <Heart
        className={animate ? "animate-wiggle" : ""}
        size={24}
        {...iconProps}
      />
    </div>
  );
}
