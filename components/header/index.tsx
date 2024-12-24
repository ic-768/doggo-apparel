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
    </MotionHeader>
  );
}
