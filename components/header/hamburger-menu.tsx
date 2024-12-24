"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface HamburgerMenuProps {
  links: {
    element: React.ReactNode;
    href: string;
    label: string;
  }[];
}
export default function HamburgerMenu({ links }: HamburgerMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </Button>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10"
          onClick={() => setIsMenuOpen(false)}
        >
          {links.map(({ element, href, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700"
            >
              {element}
              <span>{label}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}
