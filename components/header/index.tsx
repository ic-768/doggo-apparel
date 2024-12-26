import { Grid, PawPrintIcon } from "lucide-react";
import { Galada } from "next/font/google";

import CartIndicator from "../ui/indicators/cart-indicator";
import FavoritesIndicator from "../ui/indicators/favorites-indicator";
import Link from "../ui/link";
import MotionLi from "../ui/motion/motion-li";
import HamburgerMenu from "./hamburger-menu";
import MotionHeader from "./motion-header";

const pacifico = Galada({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export default function Header({ withLinks }: { withLinks?: boolean }) {
  const links = [
    {
      element: (
        <div>
          <Grid />
        </div>
      ),
      href: "/browse",
      label: "Browse",
    },
    { element: <FavoritesIndicator />, href: "/favorites", label: "Favorites" },
    { element: <CartIndicator />, href: "/cart", label: "Cart" },
  ];

  return (
    <MotionHeader>
      <div className="flex h-full items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold sm:text-2xl"
        >
          <PawPrintIcon className="size-8" />
          <span className={pacifico.className}>Doggo Apparel</span>
        </Link>
        {withLinks && (
          <nav className="relative">
            <ul className="hidden gap-10 sm:flex">
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
    </MotionHeader>
  );
}
