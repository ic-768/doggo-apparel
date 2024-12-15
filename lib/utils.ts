import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { clothingCategories } from "./clothing-categories";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getClothingItemById(id: number) {
  for (const category of clothingCategories) {
    const item = category.items.find((item) => item.id === id);

    if (item) {
      return item;
    }
  }
  throw new Error(`Item with id ${id} not found`);
}

export function getRelatedItems(id: number) {
  const category = clothingCategories.find(
    (category) => category.items.find((item) => item.id === id) !== undefined,
  );

  if (!category) {
    throw new Error(`Item with id ${id} not found`);
  }

  return category.items.filter((item) => item.id !== id);
}
