"use client";

import React, { createContext, ReactNode, useEffect, useState } from "react";

interface CartItem {
  id: number;
  price: number;
  size: string;
  quantity: number;
}

export interface ShoppingCartContextType {
  cart: CartItem[] | null;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  numItems: number;
  getNumInCart: (id: number) => number;
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
    let nextCart = [];

    // first item in cart
    if (!cart || !cart.length) {
      nextCart = [{ ...item }];
    }

    // if item is already in cart, increment quantity
    else if (cart?.find((i) => i.size === item.size && i.id === item.id)) {
      nextCart = cart.map((i) =>
        i.id === item.id && i.size === item.size
          ? { ...i, quantity: i.quantity + 1 }
          : i,
      );
    }

    // first item of it's kind
    else nextCart = [...cart, { ...item }];

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

  // total num of items
  const numItems = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  // how many of an item in cart
  const getNumInCart = (id: number, size?: string) => {
    // if size is provided, take that into account
    const itemsInCart = cart?.filter(
      (item) => item.id === id && (!size || item.size === size),
    );
    return itemsInCart?.reduce((total, item) => total + item.quantity, 0) || 0;
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        numItems,
        getNumInCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
