"use client";

import Category from "@/components/browse/categories/category";
import NoFavorites from "@/components/favorites/no-favorites";
import { Button } from "@/components/ui/button";
import Main from "@/components/ui/main";
import { useFavorites } from "@/context/favorites/use-favorites";

export default function Favorites() {
  const { favorites, clearFavorites } = useFavorites();

  if (favorites === null) return <Main />;

  return (
    <Main>
      <title>Favorites</title>
      {favorites.length > 0 && (
        <Button
          variant="destructive"
          className="self-end"
          onClick={clearFavorites}
        >
          Clear Favorites
        </Button>
      )}
      <Category items={favorites} noResultElement={<NoFavorites />} />
    </Main>
  );
}
