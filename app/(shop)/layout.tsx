import Header from "@/components/header";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header withLinks />
      {children}
    </>
  );
}
