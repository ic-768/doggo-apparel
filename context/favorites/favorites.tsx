"use client";

import React, { createContext, ReactNode, useEffect, useState } from "react";

export interface FavoritesContextType {
  // id array
  favorites: number[] | null;
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
  clearFavorites: () => void;
  isFavorite: (id: number) => boolean;
  setFavorites: React.Dispatch<React.SetStateAction<number[] | null>>;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<number[] | null>(null);

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

  const addToFavorites = (id: number) => {
    if (!favorites || favorites.find((i) => i === id)) {
      return; // Item already in favorites
    }
    setFavorites((prevFavorites) =>
      prevFavorites ? [...prevFavorites, id] : [id],
    );
  };

  const removeFromFavorites = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites ? prevFavorites.filter((i) => i !== id) : [],
    );
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  const isFavorite = (id: number) => {
    return favorites?.some((i) => i === id) || false;
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
