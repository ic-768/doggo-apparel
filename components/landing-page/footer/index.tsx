import { PawPrintIcon } from "lucide-react";

import ContactInfo from "./contact-info";
import QuickLinks from "./quick-links";
import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-12 text-white sm:py-8 md:py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="mb-8 w-full md:mb-0 md:w-1/4">
            <div className="mb-4 flex items-center space-x-2">
              <PawPrintIcon />
              <span className="text-2xl font-bold text-white">
                Doggo Apparel
              </span>
            </div>
            <p className="text-gray-400">Dressing dogs in style since 2023</p>
          </div>
          <QuickLinks />
          <ContactInfo />
          <SocialLinks />
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2023 Doggo Apparel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
