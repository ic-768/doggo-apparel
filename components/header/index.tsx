"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Grid, Menu, PawPrintIcon, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import CartIndicator from "../ui/indicators/cart-indicator";
import FavoritesIndicator from "../ui/indicators/favorites-indicator";
import Link from "../ui/link";
import MotionLi from "../ui/motion/motion-li";

export default function Header({ withLinks }: { withLinks?: boolean }) {
  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 90], [96, 64]);
  const paddingX = useTransform(scrollY, [0, 90], [48, 32]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { element: <Grid size={24} />, href: "/browse", label: "Browse" },
    { element: <FavoritesIndicator />, href: "/favorites", label: "Favorites" },
    { element: <CartIndicator />, href: "/cart", label: "Cart" },
  ];

  return (
    <motion.header
      style={{
        height: headerHeight,
        paddingLeft: paddingX,
        paddingRight: paddingX,
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-blue-100 to-blue-200 border-b border-zinc-400 w-full shadow-lg"
    >
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center space-x-2">
          <PawPrintIcon />
          <Link href="/" className="text-2xl font-bold">
            Doggo Apparel
          </Link>
        </div>
        {withLinks && (
          <nav className="relative">
            <ul className="hidden md:flex gap-10">
              {links.map(({ element, href }) => (
                <MotionLi key={href} whileHover={{ scale: 1.08 }}>
                  <Link className="text-gray-600" href={href}>
                    {element}
                  </Link>
                </MotionLi>
              ))}
            </ul>
            <HamburgerMenu links={links} />
          </nav>
        )}
      </div>
    </motion.header>
  );
}

const HamburgerMenu = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10"
        >
          {links.map(({ element, href, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {element}
              <span>{label}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};
