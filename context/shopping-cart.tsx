"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

interface CartItem {
  id: number;
  price: number;
  size: string;
}

export interface ShoppingCartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const ShoppingCartContext = createContext<
  ShoppingCartContextType | undefined
>(undefined);

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  // Load cart from localStorage on initial load
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Update localStorage whenever cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
