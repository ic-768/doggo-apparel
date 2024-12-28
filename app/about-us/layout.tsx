import { Metadata } from "next";

import Header from "@/components/header";

export const metadata: Metadata = {
  title: "About Doggo Apparel",
  description: "Your one-stop shop for canine style",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header visibilityThreshold={500} />
      {children}
    </>
  );
}
