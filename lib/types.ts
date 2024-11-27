import { clothingCategories } from "./clothing-categories";

export type ClothingItem = (typeof clothingCategories)[number]["items"][number];
