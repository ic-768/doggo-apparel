import { type ClassValue, clsx } from "clsx";
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

export function getClothingItemsByIds(ids: number[]) {
  const result = [];

  for (const id of ids) {
    result.push(getClothingItemById(id));
  }

  return result;
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

export function getClothingCategoryByName(name: string) {
  return clothingCategories.find(
    (category) => category.name.toLowerCase() === name.toLowerCase(),
  );
}

export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay = 300,
) {
  let timeout: NodeJS.Timeout | null = null;

  const debouncedFunction = (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };

  debouncedFunction.cancel = () => {
    if (timeout) clearTimeout(timeout);
    timeout = null;
  };

  return debouncedFunction;
}
