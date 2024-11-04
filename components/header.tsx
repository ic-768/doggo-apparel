import { PawPrintIcon } from "lucide-react";
import Link from "next/link";

const links = [
  { name: "Home", href: "#" },
  { name: "Shop", href: "/browse" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-4 mx-auto bg-gradient-to-b from-blue-100 to-blue-200 border-b border-zinc-800">
      <div className="flex items-center space-x-2">
        <PawPrintIcon />
        <span className="text-2xl font-bold text-blue-600">Doggo Apparel</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          {links.map(({ name, href }) => (
            <li key={name}>
              <Link
                className="text-gray-600 transition-colors hover:text-blue-600"
                href={href}
                passHref
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
