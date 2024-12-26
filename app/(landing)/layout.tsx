import { Metadata } from "next";

import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Doggo Apparel",
  description: "Bow wow indeed!",
};
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
