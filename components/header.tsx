import { PawPrintIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-4 mx-auto">
      <div className="flex items-center space-x-2">
        <PawPrintIcon />
        <span className="text-2xl font-bold text-blue-600">Doggo Apparel</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="text-gray-600 transition-colors hover:text-blue-600"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 transition-colors hover:text-blue-600"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 transition-colors hover:text-blue-600"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 transition-colors hover:text-blue-600"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
