"use client";

import { Heart } from "lucide-react";

import { useFavorites } from "@/context/favorites/use-favorites";

import NumberBubble from "./number-bubble";

export default function FavoritesIndicator({ id }: { id?: number }) {
  const { favorites, isFavorite } = useFavorites();

  const showNum = id === undefined;
  const numToShow = favorites?.length || 0;

  const iconProps =
    id !== undefined && isFavorite(id)
      ? { fill: "red", stroke: "red" }
      : undefined;

  return (
    <div className="relative">
      {showNum && <NumberBubble number={numToShow} />}
      <Heart size={24} {...iconProps} />
    </div>
  );
}
