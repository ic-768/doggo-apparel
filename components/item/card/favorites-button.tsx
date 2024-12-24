"use client";
import { twMerge } from "tailwind-merge";

import FavoritesIndicator from "@/components/ui/indicators/favorites-indicator";
import { useFavorites } from "@/context/favorites/use-favorites";
import { getClothingItemById } from "@/lib/utils";

interface FavoritesButtonProps {
  className?: string;
  id: number;
}
export default function FavoritesButton({
  id,
  className,
}: FavoritesButtonProps) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const onClick = () => {
    const item = getClothingItemById(id);

    if (isFavorite(id)) {
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
      <FavoritesIndicator id={id} />
    </button>
  );
}
