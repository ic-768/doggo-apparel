"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FacebookIcon,
  InstagramIcon,
  PawPrintIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import dog from "../images/glasses/glasses-3.jpg";
import selfie1 from "../images/user-selfies/selfie-1.jpg";
import selfie2 from "../images/user-selfies/selfie-2.jpg";
import selfie3 from "../images/user-selfies/selfie-3.webp";
import hat11 from "../images/hats/hat-11.jpg";
import sportOutfit from "../images/outfits/sporty.jpg";
import batdog from "../images/outfits/batman.jpg";
import bernard from "../images/outfits/indian-bernard.jpg";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-amber-100">
      <header className="container flex justify-between items-center py-6 px-4 mx-auto">
        <div className="flex items-center space-x-2">
          <PawPrintIcon />
          <span className="text-2xl font-bold text-blue-600">
            Doggo Apparel
          </span>
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

      <main>
        <section className="container flex flex-col gap-4 items-center py-20 px-4 mx-auto lg:flex-row">
          <div className="flex flex-col gap-8 mb-10 lg:mb-0 lg:w-1/2">
            <motion.h1
              className="text-5xl font-bold text-gray-800 lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Dress Your Dog in Style
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover the latest in canine fashion at Doggo Apparel. Because
              every dog deserves to look their best!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="py-3 px-6 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700">
                Shop Now
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              className="rounded-lg"
              alt="cutely dressed dog"
              src={dog}
              width={500}
              height={500}
            />
          </motion.div>
        </section>

        <section className="py-20 bg-white">
          <div className="flex flex-col gap-12 px-4 mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <Image
                      className="w-full rounded-lg"
                      alt="cutely dressed dog"
                      src={hat11}
                      width={500}
                      height={500}
                    />
                    <h3 className="mb-2 text-xl font-semibold">
                      Fancy Dog Outfit 1
                    </h3>
                    <p className="mb-4 text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Button className="w-full text-white bg-blue-600 hover:bg-blue-700">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <Image
                      className="w-full rounded-lg"
                      alt="cutely dressed dog"
                      src={batdog}
                      width={500}
                      height={500}
                    />
                    <h3 className="mb-2 text-xl font-semibold">
                      Fancy Dog Outfit 2
                    </h3>
                    <p className="mb-4 text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Button className="w-full text-white bg-blue-600 hover:bg-blue-700">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <Image
                      className="w-full rounded-lg"
                      alt="cutely dressed dog"
                      src={bernard}
                      width={500}
                      height={500}
                    />
                    <h3 className="mb-2 text-xl font-semibold">
                      Fancy Dog Outfit 3
                    </h3>
                    <p className="mb-4 text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Button className="w-full text-white bg-blue-600 hover:bg-blue-700">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="flex flex-col gap-12 px-4 mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <p className="mb-4 text-gray-600">
                    "My dog looks absolutely adorable in their new outfit from
                    Doggo Apparel! The quality is amazing."
                  </p>
                  <div className="flex 1s-center">
                    <Image
                      width={50}
                      height={50}
                      src={selfie1}
                      alt="Customer 1"
                      className="mr-4 w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">Happy Customer 1</p>
                      <p className="text-sm text-gray-250">Dog Parent</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <p className="mb-4 text-gray-600">
                    "My dog looks absolutely adorable in their new outfit from
                    Doggo Apparel! The quality is amazing."
                  </p>
                  <div className="flex 2s-center">
                    <Image
                      width={50}
                      height={50}
                      src={selfie2}
                      alt="Customer 2"
                      className="mr-4 w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">Happy Customer 2</p>
                      <p className="text-sm text-gray-250">Dog Parent</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <p className="mb-4 text-gray-600">
                    "My dog looks absolutely adorable in their new outfit from
                    Doggo Apparel! The quality is amazing."
                  </p>
                  <div className="flex 3s-center">
                    <Image
                      width={50}
                      height={50}
                      src={selfie3}
                      alt="Customer 3"
                      className="mr-4 w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">Happy Customer 3</p>
                      <p className="text-sm text-gray-250">Dog Parent</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center lg:flex-row">
              <div className="mb-10 lg:mb-0 lg:w-1/2">
                <Image
                  className="rounded-lg"
                  alt="cutely dressed dog"
                  src={sportOutfit}
                  width={500}
                  height={500}
                />
              </div>
              <div className="lg:pl-12 lg:w-1/2">
                <h2 className="mb-6 text-4xl font-bold text-gray-800">
                  About Doggo Apparel
                </h2>
                <p className="mb-6 text-xl text-gray-600">
                  At Doggo Apparel, we believe that every dog deserves to feel
                  special. Our mission is to provide high-quality, stylish
                  clothing for dogs of all sizes and breeds.
                </p>
                <p className="mb-6 text-xl text-gray-600">
                  Founded by dog lovers, we understand the unique bond between
                  humans and their furry friends. That's why we put so much care
                  into every piece we create.
                </p>
                <Button className="py-3 px-6 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600">
          <div className="container px-4 mx-auto">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-6 text-4xl font-bold text-white">
                Join Our Newsletter
              </h2>
              <p className="mb-8 text-xl text-blue-100">
                Stay up to date with the latest trends in dog fashion and
                exclusive offers!
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-white bg-gray-800">
        <div className="container px-4 mx-auto">
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
    </div>
  );
}
