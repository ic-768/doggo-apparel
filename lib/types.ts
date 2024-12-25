import { clothingCategories } from "./clothing-categories";

export type ClothingCategories = typeof clothingCategories;
export type ClothingCategory = ClothingCategories[number];
export type ClothingItem = ClothingCategory["items"][number];
