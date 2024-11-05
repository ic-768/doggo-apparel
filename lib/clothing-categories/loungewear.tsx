import Robe from "@/images/robes/robe.jpg";
import Robe1 from "@/images/robes/robe-2.jpg";
import Pyjama1 from "@/images/pyjamas/pyjama-1.jpg";
import Pyjama2 from "@/images/pyjamas/pyjama-2.jpg";

export const loungewear = {
  name: "Loungewear",
  items: [
    {
      name: "White Robe",
      price: 59.99,
      image: Robe,
      description: "Luxurious robe perfect for spa days.",
      id: 36,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      name: "Cream Robe",
      price: 69.99,
      image: Robe1,
      description: "Soft and cozy robe for relaxation.",
      id: 37,
    },
    {
      name: "Blue Pyjama Set",
      price: 39.99,
      image: Pyjama1,
      description: "Comfortable pajama set for a good night's sleep.",
      id: 38,
    },
    {
      name: "Pink Pyjama Set",
      price: 49.99,
      image: Pyjama2,
      description: "Stylish pajama set for lounging.",
      id: 39,
    },
  ],
};
