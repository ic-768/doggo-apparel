"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

import { useShoppingCart } from "@/context/use-shopping-cart";

export default function CartIndicator({ id }: { id?: number }) {
  const { numItems, getNumInCart } = useShoppingCart();

  const numToShow = id !== undefined ? getNumInCart(id) : numItems;

  return (
    <div className="relative">
      {numToShow > 0 && (
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

      <ShoppingCart size={24} />
    </div>
  );
}
