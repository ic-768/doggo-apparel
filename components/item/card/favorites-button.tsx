"use client";

import { twMerge } from "tailwind-merge";

import FavoritesIndicator from "@/components/ui/indicators/favorites-indicator";
import { useFavorites } from "@/context/favorites/use-favorites";
import { ClothingItem } from "@/lib/types";

interface FavoritesButtonProps {
  className?: string;
  item: ClothingItem;
}
export default function FavoritesButton({
  className,
  item,
}: FavoritesButtonProps) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const onClick = () => {
    if (isFavorite(item.id)) {
      removeFromFavorites(item.id);
    } else {
      addToFavorites(item);
    }
  };

  const classes = twMerge(
    "hover:bg-neutral-200 p-2 rounded-lg transition-all",
    className,
  );
  return (
    <button className={classes} onClick={onClick}>
      <FavoritesIndicator id={item.id} />
    </button>
  );
}
