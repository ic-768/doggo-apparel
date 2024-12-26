"use client";

import Category from "@/components/browse/categories/category";
import Main from "@/components/ui/main";
import { useFavorites } from "@/context/favorites/use-favorites";

export default function Favorites() {
  const { favorites } = useFavorites();

  if (favorites === null) return <Main />;

  return (
    <Main>
      <title>Favorites</title>
      <Category items={favorites} />
    </Main>
  );
}
