"use client";

import ClearFavorites from "@/components/favorites/clear-favorites";
import NoFavorites from "@/components/favorites/no-favorites";
import ItemList from "@/components/item-list/item-list";
import Main from "@/components/ui/main";
import { useFavorites } from "@/context/favorites/use-favorites";

export default function Favorites() {
  const { favorites } = useFavorites();

  if (favorites === null) return <Main />;

  return (
    <Main>
      <title>Favorites</title>
      {favorites.length > 0 && <ClearFavorites />}
      <ItemList items={favorites} noResultElement={<NoFavorites />} />
    </Main>
  );
}
