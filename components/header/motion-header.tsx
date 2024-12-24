"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MotionHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 90], [96, 64]);
  const paddingX = useTransform(scrollY, [0, 90], [48, 32]);
  return (
    <motion.header
      style={{
        height: headerHeight,
        paddingLeft: paddingX,
        paddingRight: paddingX,
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-blue-100 to-blue-200 border-b border-zinc-400 w-full shadow-lg"
    >
      {children}
    </motion.header>
  );
}
