import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { Galada } from "next/font/google";
import localFont from "next/font/local";

import Footer from "@/components/landing-page/footer";
import { Loader } from "@/components/ui/loader";
import { ShoppingCartProvider } from "@/context/cart/shopping-cart";
import { FavoritesProvider } from "@/context/favorites/favorites";
import { QueryProvider } from "@/context/query/query";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const galada = Galada({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-galada",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${galada.variable} ${geistSans.variable} font-geistSans flex min-h-screen flex-col items-center antialiased`}
      >
        <ShoppingCartProvider>
          <FavoritesProvider>
            <QueryProvider>
              <Suspense fallback={<Loader />}>{children}</Suspense>
            </QueryProvider>
          </FavoritesProvider>
        </ShoppingCartProvider>
        <Footer />
        <ToastContainer position="bottom-right" closeOnClick pauseOnHover />
      </body>
    </html>
  );
}
