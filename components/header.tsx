import { Grid, Heart, PawPrintIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";

const links = [
  { element: <Grid size={24} />, href: "/browse" },
  { element: <Heart size={24} />, href: "/favorites" },
  { element: <ShoppingCart size={24} />, href: "/cart" },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-4 mx-auto bg-gradient-to-b from-blue-100 to-blue-200 border-b border-zinc-800">
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
        <ul className="flex space-x-4">
          {links.map(({ element, href }) => (
            <li key={href}>
              <Link
                className="text-gray-600 transition-colors hover:text-blue-600"
                href={href}
                passHref
              >
                {element}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
