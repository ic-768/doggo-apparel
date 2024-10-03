import {
  FacebookIcon,
  InstagramIcon,
  PawPrintIcon,
  TwitterIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 text-white bg-gray-800">
      <div className="px-4 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="mb-8 w-full md:mb-0 md:w-1/4">
            <div className="flex items-center mb-4 space-x-2">
              <PawPrintIcon />
              <span className="text-2xl font-bold text-white">
                Doggo Apparel
              </span>
            </div>
            <p className="text-gray-400">Dressing dogs in style since 2023</p>
          </div>
          <div className="mb-8 w-full md:mb-0 md:w-1/4">
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8 w-full md:mb-0 md:w-1/4">
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <p className="mb-2 text-gray-400">123 Doggy Lane</p>
            <p className="mb-2 text-gray-400">Pawville, PC 12345</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-gray-700">
          <p className="text-gray-400">
            &copy; 2023 Doggo Apparel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
