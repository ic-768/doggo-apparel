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

type QueryParams = {
  [key: string]:
    | string
    | number
    | null
    | boolean
    | undefined
    | (string | number | null | boolean | undefined)[];
};

export const addQueryParams = (
  baseUrl: string,
  params: QueryParams,
): string => {
  const [path, queryString] = baseUrl.split("?");
  const existingParams = new URLSearchParams(queryString || "");

  // Merge new parameters with existing ones
  for (const key in params) {
    const value = params[key];
    if (Array.isArray(value)) {
      existingParams.delete(key); // Remove existing key before appending
      value.forEach((item) => {
        if (item !== undefined && item !== null && item !== "") {
          existingParams.append(key, item.toString());
        }
      });
    } else if (value !== undefined && value !== null && value !== "") {
      existingParams.set(key, value.toString());
    } else {
      existingParams.delete(key); // Remove key if value is null/undefined/empty
    }
  }

  return `${path}?${existingParams.toString()}`;
};
