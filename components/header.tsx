"use client";
import { Grid, Heart, PawPrintIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";
import MotionLi from "./ui/motion/motion-li";
import { useShoppingCart } from "@/context/use-shopping-cart";

export default function Header() {
  const { numItems } = useShoppingCart();

  const links = [
    { element: <Grid size={24} />, href: "/browse" },
    { element: <Heart size={24} />, href: "/favorites" },
    {
      element: (
        <div className="relative">
          {numItems && numItems > 0 ? (
            <span className="absolute -top-3 -right-3 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full">
              {numItems}
            </span>
          ) : null}
          <ShoppingCart size={24} />
        </div>
      ),
      href: "/cart",
    },
  ];

  return (
    <header className="flex justify-between items-center py-6 px-12 mx-auto bg-gradient-to-b from-blue-100 to-blue-200 border-b border-zinc-400">
      <div className="flex items-center space-x-2">
        <PawPrintIcon />
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-500 transition-colors"
        >
          Doggo Apparel
        </Link>
      </div>
      <nav>
        <ul className="flex gap-10">
          {links.map(({ element, href }) => (
            <MotionLi key={href} whileHover={{ scale: 1.08 }}>
              <Link
                className="text-gray-600 hover:text-blue-600"
                href={href}
                passHref
              >
                {element}
              </Link>
            </MotionLi>
          ))}
        </ul>
      </nav>
    </header>
  );
}
