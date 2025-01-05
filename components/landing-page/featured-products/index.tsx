"use client";

import MotionH from "@/components/ui/motion/motion-h";
import hat11 from "@/images/hats/hat-11.jpg";
import batdog from "@/images/outfits/batman.jpg";
import bernard from "@/images/outfits/indian-bernard.jpg";
import { fadeIntoView } from "@/lib/motion";

import PreviewCard from "./preview-card";

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto flex flex-col gap-12 px-4">
        <MotionH
          as="h2"
          {...fadeIntoView}
          className="text-center text-4xl font-bold text-gray-800"
        >
          Featured Products
        </MotionH>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <PreviewCard
            alt="awesome dog in an awesome hat"
            src={hat11}
            id={27}
            title="Doggo hat"
            description="Made of 100% cotton, this cap keeps your dog cool on hot days, while the adjustable strap ensures a snug fit for dogs of all sizes."
          />
          <PreviewCard
            alt="nanananananana Bat dog!"
            src={batdog}
            title="Batman costume"
            id={40}
            description="This sleek, officially licensed outfit transforms your pup into Gotham’s Dark Knight for that signature vigilante look."
          />
          <PreviewCard
            alt="saint bernard in beautiful indian attire"
            src={bernard}
            id={43}
            title="Indian outfit"
            description="Dress your pup in timeless elegance. Whether it's a wedding, festival, or special occasion, your dog will turn heads in this regal ensemble."
          />
        </div>
      </div>
    </section>
  );
}
