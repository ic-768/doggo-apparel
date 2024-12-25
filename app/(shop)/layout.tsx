import { Suspense } from "react";

import Header from "@/components/header";
import Main from "@/components/ui/main";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header withLinks />
      <Suspense fallback={<Main />}>{children}</Suspense>
    </>
  );
}
