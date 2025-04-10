import { PawPrintIcon } from "lucide-react";

import ContactInfo from "./contact-info";
import QuickLinks from "./quick-links";
import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 py-12 text-white sm:py-8 md:py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between pb-4">
          <div className="flex w-full flex-col gap-2 pb-4 md:w-1/4">
            <div className="flex items-center gap-2">
              <PawPrintIcon />
              <span className="font-galada text-2xl font-bold text-white">
                Doggo Apparel
              </span>
            </div>
            <p className="text-gray-400">Dressing dogs in style since 2023</p>
          </div>
          <QuickLinks />
          <ContactInfo />
          <SocialLinks />
        </div>
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            &copy; 2023 Doggo Apparel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
