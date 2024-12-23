import { PawPrintIcon } from "lucide-react";

import ContactInfo from "./contact-info";
import QuickLinks from "./quick-links";
import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer className="py-12 text-white bg-gray-800 sm:py-8 md:py-4">
      <div className="px-4 mx-auto container">
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
          <QuickLinks />
          <ContactInfo />
          <SocialLinks />
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
