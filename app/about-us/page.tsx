import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Main from "@/components/ui/main";
import MotionDiv from "@/components/ui/motion/motion-div";
import sportOutfit from "@/images/outfits/sporty.jpg";
import { aboutUsCards } from "@/lib/constants";
import { fadeIntoView } from "@/lib/motion";

export default function AboutUs() {
  return (
    <Main>
      <div className="container flex flex-col items-center justify-center gap-6 px-4 text-center">
        <MotionDiv {...fadeIntoView} className="">
          <Image
            className="rounded-lg"
            alt="cutely dressed dog"
            src={sportOutfit}
            width={500}
            height={500}
          />
        </MotionDiv>
        <MotionDiv
          {...fadeIntoView}
          className="flex flex-col items-center gap-6 lg:w-1/2"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            About <span className="text-nowrap font-galada">Doggo Apparel</span>
          </h2>
          <p className="text-xl text-gray-600">
            At Doggo Apparel, we believe that every dog deserves to feel
            special. Our mission is to provide high-quality, stylish clothing
            for dogs of all sizes and breeds.
          </p>
          <p className="text-xl text-gray-600">
            Founded by dog lovers, we understand the unique bond between humans
            and their furry friends. That&apos;s why we put so much care into
            every piece we create.
          </p>
          <div className="flex flex-col gap-6 py-8">
            <h2 className="text-center text-3xl font-semibold">
              Why Choose Doggo Apparel?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {aboutUsCards.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <feature.icon className="size-12 text-primary" />
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col gap-6 text-center">
              <h2 className="text-3xl font-semibold">
                Ready to Style Your Pup?
              </h2>
              <Button asChild>
                <Link href="/browse">Shop Now</Link>
              </Button>
            </div>
          </div>
        </MotionDiv>
      </div>
    </Main>
  );
}
