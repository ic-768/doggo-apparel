import { ToastContainer } from "react-toastify";
import type { Metadata } from "next";
import localFont from "next/font/local";

import Header from "@/components/header";
import Footer from "@/components/landing-page/footer";
import { ShoppingCartProvider } from "@/context/shopping-cart";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

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

export const metadata: Metadata = {
  title: "Doggo Apparel",
  description: "Bow wow indeed!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ShoppingCartProvider>
          <Header />
          {children}
        </ShoppingCartProvider>
        <Footer />
        <ToastContainer position="bottom-right" closeOnClick pauseOnHover />
      </body>
    </html>
  );
}
