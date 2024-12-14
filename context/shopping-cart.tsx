"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

interface CartItem {
  id: number;
  price: number;
  size: string;
}

type CartItemWithQuantity = CartItem & {
  quantity: number;
};

export interface ShoppingCartContextType {
  cart: CartItem[] | null;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  numItems: number;
}

export const ShoppingCartContext = createContext<
  ShoppingCartContextType | undefined
>(undefined);

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  // Null means that it hasn't been loaded from local storage yet.
  // This avoids hydration error
  const [cart, setCart] = useState<CartItemWithQuantity[] | null>(null);

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
    let nextCart = [];

    // first item in cart
    if (!cart || !cart.length) {
      nextCart = [{ ...item, quantity: 1 }];
    }

    // if item is already in cart, increment quantity
    else if (cart?.find((i) => i.size === item.size && i.id === item.id)) {
      nextCart = cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
      );
    }

    // first item of it's kind
    else nextCart = [...cart, { ...item, quantity: 1 }];

    setCart(nextCart);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) =>
      prevCart ? prevCart.filter((item) => item.id !== id) : [],
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const numItems = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <ShoppingCartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, numItems }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
