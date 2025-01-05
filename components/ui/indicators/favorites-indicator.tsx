"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

import { useFavorites } from "@/context/favorites/use-favorites";

import NumberBubble from "./number-bubble";

interface FavoritesIndicatorProps {
  id?: number;
  rotateOnIdle?: boolean;
}

export default function FavoritesIndicator({
  id,
  rotateOnIdle = false,
}: FavoritesIndicatorProps) {
  const { favorites, isFavorite } = useFavorites();
  const [rotate, setRotate] = useState<boolean>(false);

  const isFavorited = id !== undefined && isFavorite(id);

  useEffect(() => {
    let id = null;

    if (rotateOnIdle && !isFavorited) {
      id = setTimeout(() => {
        setRotate(true);
      }, 20_000);
    }

    return () => {
      if (id !== null) {
        clearTimeout(id);
        setRotate(false);
      }
    };
  }, [rotateOnIdle, isFavorited]);

  const showNum = id === undefined;
  const numToShow = favorites?.length || 0;

  const iconProps = isFavorited ? { fill: "red", stroke: "red" } : undefined;

  if (favorites === null) return;

  return (
    <div className="relative flex size-full items-center justify-center">
      {showNum && !!numToShow && <NumberBubble number={numToShow} />}
      <Heart
        className={rotate ? "animate-wiggle" : ""}
        size={24}
        {...iconProps}
      />
    </div>
  );
}
