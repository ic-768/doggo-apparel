import { Loader } from "@/components/ui/loader";
import Main from "@/components/ui/main";

export default function Loading() {
  return (
    <Main className="justify-center">
      <Loader />
    </Main>
  );
}