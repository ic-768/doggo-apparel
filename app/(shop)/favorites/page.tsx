import { Construction } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Main from "@/components/ui/main";

export const metadata = {
  title: "Favorites",
};

export default function Favorites() {
  return (
    <Main>
      <Card className="mx-auto">
        <div className="flex flex-col items-center gap-6 p-8 text-center">
          <div className="rounded-full bg-blue-100 p-6">
            <Construction className="size-12 text-blue-500" />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-gray-900">
              Page Under Construction
            </h1>
            <p className="text-muted-foreground">
              We&apos;re working on something pawsome! This section will be
              available soon.
            </p>
          </div>

          <Button asChild effect="shine">
            <Link className="hover:no-underline" href="/browse">
              <span>Back to Browse</span>
            </Link>
          </Button>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="size-2 animate-pulse rounded-full bg-blue-500" />
            Coming Soon
          </div>
        </div>
      </Card>
    </Main>
  );
}
