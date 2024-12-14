"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

interface CartItem {
  id: number;
  price: number;
  size: string;
}

export interface ShoppingCartContextType {
  cart: CartItem[] | null;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const ShoppingCartContext = createContext<
  ShoppingCartContextType | undefined
>(undefined);

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  // Null means that it hasn't been loaded from local storage yet.
  // This avoids hydration error
  const [cart, setCart] = useState<CartItem[] | null>(null);

  // Load cart from localStorage after mounting
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    setCart(savedCart ? JSON.parse(savedCart) : []);
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    // If null (i.e. it's just been initialised), don't overwrite localStorage
    if (cart === null) return;

    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => (prevCart ? [...prevCart, item] : [item]));
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) =>
      prevCart ? prevCart.filter((item) => item.id !== id) : [],
    );
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
