"use client";
import FavoritesIndicator from "@/components/ui/indicators/favorites-indicator";
import { useFavorites } from "@/context/favorites/use-favorites";
import { getClothingItemById } from "@/lib/utils";

export default function FavoritesButton({ id }: { id: number }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const onClick = () => {
    const item = getClothingItemById(id);

    console.log(item);
    if (isFavorite(id)) {
      removeFromFavorites(item.id);
    } else {
      addToFavorites(item);
    }
  };

  return (
    <button
      className="hover:bg-neutral-200 p-2 rounded-lg transition-all"
      onClick={onClick}
    >
      <FavoritesIndicator id={id} />
    </button>
  );
}
