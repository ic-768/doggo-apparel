import Category from "@/components/browse/categories/category";
import Main from "@/components/ui/main";

export const metadata = {
  title: "Favorites",
};

export default function Favorites() {
  return (
    <Main>
      <Category items={[]} />
    </Main>
  );
}
