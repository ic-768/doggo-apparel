"use client";

import NoFavorites from "@/components/favorites/no-favorites";
import ItemList from "@/components/item-list/item-list";
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
      <ItemList items={favorites} noResultElement={<NoFavorites />} />
    </Main>
  );
}
