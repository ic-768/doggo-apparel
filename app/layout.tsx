import { ToastContainer } from "react-toastify";
import { Galada } from "next/font/google";
import localFont from "next/font/local";

import Footer from "@/components/landing-page/footer";
import { ShoppingCartProvider } from "@/context/cart/shopping-cart";
import { FavoritesProvider } from "@/context/favorites/favorites";

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

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
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
        className={`${galada.variable} ${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col items-center antialiased`}
      >
        <ShoppingCartProvider>
          <FavoritesProvider>{children}</FavoritesProvider>
        </ShoppingCartProvider>
        <Footer />
        <ToastContainer position="bottom-right" closeOnClick pauseOnHover />
      </body>
    </html>
  );
}
