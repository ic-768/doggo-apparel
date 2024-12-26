"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MotionHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 90], [96, 64]);
  return (
    <motion.header
      style={{
        height: headerHeight,
      }}
      className="fixed left-0 right-0 top-0 z-50 w-full border-b border-zinc-400 bg-gradient-to-b from-blue-100 to-blue-200 px-8 shadow-lg"
    >
      {children}
    </motion.header>
  );
}
