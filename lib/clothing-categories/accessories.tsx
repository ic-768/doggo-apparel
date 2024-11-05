import Bandana1 from "@/images/accessories/bandana.jpg";
import Headband1 from "@/images/accessories/headband.jpg";
import Headband2 from "@/images/accessories/headband-2.jpg";
import Bandana2 from "@/images/accessories/bandana-2.jpg";
import Bandana3 from "@/images/accessories/bandana-3.jpg";
import Bow from "@/images/accessories/bow.jpg";
import Gold from "@/images/accessories/gold.jpg";
import Multiple2 from "@/images/accessories/multiple-2.jpg";
import Multiple from "@/images/accessories/multiple.jpg";
import Scarf from "@/images/accessories/scarf.jpg";

export const accessories = {
  name: "Accessories",
  items: [
    {
      name: "Blue Bandana",
      price: 14.99,
      image: Bandana1,
      description: "A stylish bandana for a laid-back look.",
      id: 0,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      name: "Blue Headband",
      price: 14.99,
      image: Bandana2,
      description: "A classic blue headband - very bohemian.",
      id: 1,
    },
    {
      name: "Blue and Red Long Bandana",
      price: 14.99,
      image: Bandana3,
      description: "A vibrant bandana perfect for adding a pop of color.",
      id: 2,
    },
    {
      name: "Cotton Headband - Striped",
      price: 9.99,
      image: Headband1,
      description:
        "A chic striped headband to keep your hair stylishly in place.",
      id: 3,
    },
    {
      name: "Floral Headband",
      price: 9.99,
      image: Headband2,
      description: "A lovely floral headband that adds a touch of whimsy.",
      id: 4,
    },
    {
      name: "Bow Set",
      price: 12.99,
      image: Bow,
      description: "An elegant bow set that enhances any look.",
      id: 5,
    },
    {
      name: "Gold Chain",
      price: 24.99,
      image: Gold,
      description: "A stunning gold chain that adds elegance to your neckline.",
      id: 6,
    },
    {
      name: "Jewellery Set",
      price: 99.99,
      image: Multiple2,
      description:
        "A unique set consisting of a cap, gold jewellery, and shades.",
      id: 7,
    },
    {
      name: "Cap and Jewellery",
      price: 51.99,
      image: Multiple,
      description: "Snoop dogg anyone?",
      id: 8,
    },
    {
      name: "Winter Scarf",
      price: 18.99,
      image: Scarf,
      description:
        "A heavy winter scarf perfect for warm days. Comes in red or blue.",
      id: 9,
    },
  ],
};
