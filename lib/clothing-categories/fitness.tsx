import Bball from "@/images/fitness/bball.jpg";
import Beater2 from "@/images/fitness/beater-2.jpg";
import Beater from "@/images/fitness/beater.jpg";
import Jacket2 from "@/images/fitness/jacket-2.jpg";
import Jacket from "@/images/fitness/jacket.jpg";
import Runner from "@/images/fitness/runner.jpg";
import Treadmill from "@/images/fitness/treadmill.jpg";

export const fitness = {
  name: "Fitness",
  items: [
    {
      name: "Orange Hoodie",
      price: 24.99,
      image: Bball,
      description: "Perfect for sports or casual streetwear.",
      id: 10,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      name: "White Beater",
      price: 19.99,
      image: Beater2,
      description: "A lightweight beater for your fitness routines.",
      id: 11,
    },
    {
      name: "Black Beater",
      price: 19.99,
      image: Beater,
      description: "Durable beater for high-intensity workouts.",
      id: 12,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      name: "Gray Jacket",
      price: 49.99,
      image: Jacket2,
      description: "A lightweight jacket for outdoor activities.",
      id: 13,
    },
    {
      name: "Gray Jacket (mini)",
      price: 49.99,
      image: Jacket,
      description: "Extra-small size jacket for our pocket-friendly friends.",
      id: 14,
    },
    {
      name: "Running shirt",
      price: 69.99,
      image: Runner,
      description: "High-performance, absorbant sports tee for any athlete.",
      id: 15,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      name: "Treadmill",
      price: 499.99,
      image: Treadmill,
      description:
        "A custom-made, state-of-the-art treadmill for home workouts.",
      id: 16,
    },
  ],
};
