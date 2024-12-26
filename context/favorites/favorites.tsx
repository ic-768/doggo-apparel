"use client";

import React, { createContext, ReactNode, useEffect, useState } from "react";

import { ClothingItem } from "@/lib/types";

export interface FavoritesContextType {
  favorites: ClothingItem[] | null;
  addToFavorites: (item: ClothingItem) => void;
  removeFromFavorites: (id: number) => void;
  clearFavorites: () => void;
  isFavorite: (id: number) => boolean;
  setFavorites: React.Dispatch<React.SetStateAction<ClothingItem[] | null>>;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<ClothingItem[] | null>(null);

  // Load favorites from localStorage after mounting
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    setFavorites(savedFavorites ? JSON.parse(savedFavorites) : []);
  }, []);

  // Update localStorage whenever favorites changes
  useEffect(() => {
    if (favorites === null) return;

    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      localStorage.removeItem("favorites");
    }
  }, [favorites]);

  const addToFavorites = (item: ClothingItem) => {
    if (!favorites || favorites.find((i) => i.id === item.id)) {
      return; // Item already in favorites
    }
    setFavorites((prevFavorites) =>
      prevFavorites ? [...prevFavorites, item] : [item],
    );
  };

  const removeFromFavorites = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites ? prevFavorites.filter((i) => i.id !== id) : [],
    );
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  const isFavorite = (id: number) => {
    return favorites?.some((item) => item.id === id) || false;
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        clearFavorites,
        isFavorite,
        setFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
