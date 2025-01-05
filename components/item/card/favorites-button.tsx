"use client";

import { useQueryClient } from "@tanstack/react-query";
import { twMerge } from "tailwind-merge";

import FavoritesIndicator from "@/components/ui/indicators/favorites-indicator";
import { useFavorites } from "@/context/favorites/use-favorites";
import { ClothingItem } from "@/lib/types";

interface FavoritesButtonProps {
  className?: string;
  pingOnIdle?: boolean;
  id: number;
}
export default function FavoritesButton({
  className,
  id,
  pingOnIdle = false,
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
    "hover:bg-neutral-200 p-2 rounded-lg transition-all",
    className,
  );
  return (
    <button className={classes} onClick={onClick}>
      <FavoritesIndicator pingOnIdle={pingOnIdle} id={id} />
    </button>
  );
}
