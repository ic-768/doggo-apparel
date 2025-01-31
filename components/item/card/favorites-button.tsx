"use client";

import { useQueryClient } from "@tanstack/react-query";
import { twMerge } from "tailwind-merge";

import FavoritesIndicator from "@/components/ui/indicators/favorites-indicator";
import { useFavorites } from "@/context/favorites/use-favorites";
import { ClothingItem } from "@/lib/types";

interface FavoritesButtonProps {
  className?: string;
  rotateOnIdle?: boolean;
  id: number;
}
export default function FavoritesButton({
  className,
  id,
  rotateOnIdle = false,
}: FavoritesButtonProps) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const queryClient = useQueryClient();

  const onClick = async () => {
    if (isFavorite(id)) {
      removeFromFavorites(id);

      const favorites = queryClient.getQueryData([
        "favorites",
      ]) as ClothingItem[];

      const updatedFavorites = favorites?.filter((item) => {
        return item.id !== id;
      });

      await queryClient.setQueryData(["favorites"], updatedFavorites);
    } else {
      addToFavorites(id);
    }
  };

  const classes = twMerge(
    "hover:bg-neutral-200 p-3 sm:p-2 rounded-lg transition-all outline outline-1 outline-neutral-300 sm:outline-none",
    className,
  );
  return (
    <button className={classes} onClick={onClick}>
      <FavoritesIndicator rotateOnIdle={rotateOnIdle} id={id} />
    </button>
  );
}
