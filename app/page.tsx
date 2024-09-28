"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      <header className="container flex justify-between items-center py-6 px-4 mx-auto">
        <div className="flex items-center space-x-2">
          <span> TODO paw icon</span>
          <span className="text-2xl font-bold text-pink-600">
            Doggo Apparel
          </span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors hover:text-pink-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors hover:text-pink-600"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors hover:text-pink-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors hover:text-pink-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="container flex flex-col items-center py-20 px-4 mx-auto lg:flex-row">
          <div className="mb-10 lg:mb-0 lg:w-1/2">
            <motion.h1
              className="mb-6 text-5xl font-bold text-gray-800 lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Dress Your Dog in Style
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-gray-600"
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
              <Button className="py-3 px-6 text-lg font-bold text-white bg-pink-600 rounded-full hover:bg-pink-700">
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
            <span> TODO image here </span>
          </motion.div>
        </section>

        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card>
                    <CardContent className="p-4">
                      <span> TODO image here </span>
                      <h3 className="mb-2 text-xl font-semibold">
                        Fancy Dog Outfit {item}
                      </h3>
                      <p className="mb-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <Button className="w-full text-white bg-pink-600 hover:bg-pink-700">
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-pink-100">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="bg-white">
                  <CardContent className="p-6">
                    <p className="mb-4 text-gray-600">
                      "My dog looks absolutely adorable in their new outfit from
                      Doggo Apparel! The quality is amazing."
                    </p>
                    <div className="flex items-center">
                      <span> TODO image here </span>
                      <div>
                        <p className="font-semibold">Happy Customer {item}</p>
                        <p className="text-sm text-gray-500">Dog Parent</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center lg:flex-row">
              <div className="mb-10 lg:mb-0 lg:w-1/2">
                <span> TODO image here </span>
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
                <Button className="py-3 px-6 text-lg font-bold text-white bg-pink-600 rounded-full hover:bg-pink-700">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-pink-600">
          <div className="container px-4 mx-auto">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-6 text-4xl font-bold text-white">
                Join Our Newsletter
              </h2>
              <p className="mb-8 text-xl text-pink-100">
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
                <span> TODO paw here </span>
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
                  <span> TODO fb here </span>
                </a>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <span> TODO insta here </span>
                </a>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <span> TODO twitter here </span>
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
