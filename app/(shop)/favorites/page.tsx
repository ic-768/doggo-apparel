"use client";

import { useQuery } from "@tanstack/react-query";

import ClearFavorites from "@/components/favorites/clear-favorites";
import NoFavorites from "@/components/favorites/no-favorites";
import ItemList from "@/components/item-list/item-list";
import BackToBrowse from "@/components/ui/back-to-browse";
import Main from "@/components/ui/main";
import { useFavorites } from "@/context/favorites/use-favorites";
import { fetchItems } from "@/lib/fetch";

export default function Favorites() {
  const { favorites } = useFavorites();

  const { data: items, isFetching } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => fetchItems(favorites!),
    enabled: !!favorites?.length,
  });

  if (favorites === null || isFetching) return <Main />;

  const view = favorites.length ? <ItemList items={items} /> : <NoFavorites />;

  return (
    <Main className="items-center">
      <title>Favorites</title>
      <div className="container flex flex-col gap-12">
        <div className="flex">
          <BackToBrowse />
          {favorites.length > 0 && <ClearFavorites />}
        </div>
        {view}
      </div>
    </Main>
  );
}
