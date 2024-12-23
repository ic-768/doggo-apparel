"use client";
import { motion } from "framer-motion";

export default function NumberBubble({ number }: { number: number }) {
  return (
    <motion.span
      className="absolute -top-3 -right-3 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        key={number}
      >
        {number}
      </motion.span>
    </motion.span>
  );
}
