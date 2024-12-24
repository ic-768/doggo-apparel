import { Grid, PawPrintIcon } from "lucide-react";

import CartIndicator from "../ui/indicators/cart-indicator";
import FavoritesIndicator from "../ui/indicators/favorites-indicator";
import Link from "../ui/link";
import MotionLi from "../ui/motion/motion-li";
import HamburgerMenu from "./hamburger-menu";
import MotionHeader from "./motion-header";

export default function Header({ withLinks }: { withLinks?: boolean }) {
  const links = [
    { element: <Grid size={24} />, href: "/browse", label: "Browse" },
    { element: <FavoritesIndicator />, href: "/favorites", label: "Favorites" },
    { element: <CartIndicator />, href: "/cart", label: "Cart" },
  ];

  return (
    <MotionHeader>
      <div className="flex justify-between items-center h-full">
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold flex items-center gap-2"
        >
          <PawPrintIcon className="size-8" />
          D/A
        </Link>
        {withLinks && (
          <nav className="relative">
            <ul className="hidden sm:flex gap-10">
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
