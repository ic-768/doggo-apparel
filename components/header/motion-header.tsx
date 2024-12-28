"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MotionHeader({
  children,
  startInvisible,
  visibilityThreshold,
}: {
  children: React.ReactNode;
  startInvisible: boolean;
  visibilityThreshold: number;
}) {
  const initialHeight = startInvisible ? 0 : 80;
  const [headerHeight, setHeaderHeight] = useState(initialHeight);

  useEffect(() => {
    const handleScroll = () => {
      const newHeight =
        window.scrollY < visibilityThreshold ? initialHeight : 50;
      setHeaderHeight(newHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibilityThreshold, startInvisible, initialHeight]);

  return (
    <motion.header
      style={{
        height: headerHeight,
      }}
      className="fixed left-0 right-0 top-0 z-50 w-full overflow-hidden border-b border-zinc-400 bg-gradient-to-b from-blue-100 to-blue-200 px-8 shadow-lg transition-all duration-500"
    >
      {children}
    </motion.header>
  );
}
