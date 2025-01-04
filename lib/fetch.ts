import { ClothingItem } from "./types";

export async function fetchItems(ids: number[]): Promise<ClothingItem[]> {
  const res = await fetch(`/api/items?ids=${ids}`);
  return res.json();
}
