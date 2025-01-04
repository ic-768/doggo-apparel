import { type NextRequest } from "next/server";

import { getClothingItemsByIds } from "@/lib/utils";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const ids = searchParams.get("ids");

  if (!ids) {
    return new Response(
      JSON.stringify({ error: "IDs parameter is required" }),
      { status: 400 },
    );
  }

  const numberIds = ids.split(",").map(Number);
  const items = getClothingItemsByIds(numberIds);

  return new Response(JSON.stringify(items), { status: 200 });
}
