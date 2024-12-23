"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import { useFavorites } from "@/context/favorites/use-favorites";

export default function FavoritesIndicator({ id }: { id?: number }) {
  const { favorites, isFavorite } = useFavorites();

  const showNum = id === undefined;
  const numToShow = favorites?.length || 0;

  const props =
    id !== undefined && isFavorite(id)
      ? { fill: "red", stroke: "red" }
      : undefined;

  return (
    <div className="relative">
      {showNum && (
        <motion.span
          className="absolute -top-3 -right-3 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            key={numToShow}
          >
            {numToShow}
          </motion.span>
        </motion.span>
      )}
      <Heart size={24} {...props} />
    </div>
  );
}
