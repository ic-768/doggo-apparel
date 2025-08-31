import { StaticImageData } from "next/image";

export type ClothingCategories = {
  name: string;
  clothing_items: {
    name: string;
    price: number;
    image_url: StaticImageData;
    description: string;
    id: number;
    sizes?: string[];
  }[];
}[];

export type ClothingCategory = ClothingCategories[number];
export type ClothingItem = ClothingCategory["clothing_items"][number];
