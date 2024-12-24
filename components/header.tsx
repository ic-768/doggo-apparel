import { Grid, PawPrintIcon } from "lucide-react";

import CartIndicator from "./ui/indicators/cart-indicator";
import FavoritesIndicator from "./ui/indicators/favorites-indicator";
import Link from "./ui/link";
import MotionLi from "./ui/motion/motion-li";

export default function Header({ withLinks }: { withLinks?: boolean }) {
  const links = [
    { element: <Grid size={24} />, href: "/browse" },
    { element: <FavoritesIndicator />, href: "/favorites" },
    {
      element: <CartIndicator />,
      href: "/cart",
    },
  ];

  return (
    <header className="flex justify-between items-center py-6 px-12 mx-auto bg-gradient-to-b from-blue-100 to-blue-200 border-b border-zinc-400 w-full">
      <div className="flex items-center space-x-2">
        <PawPrintIcon />
        <Link href="/" className="text-2xl font-bold">
          Doggo Apparel
        </Link>
      </div>
      <nav>
        <ul className="flex gap-10">
          {withLinks &&
            links.map(({ element, href }) => (
              <MotionLi key={href} whileHover={{ scale: 1.08 }}>
                <Link className="text-gray-600" href={href}>
                  {element}
                </Link>
              </MotionLi>
            ))}
        </ul>
      </nav>
    </header>
  );
}
