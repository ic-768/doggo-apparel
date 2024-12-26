"use client";

import React, { createContext, ReactNode, useEffect, useState } from "react";

export interface CartItem {
  id: number;
  price: number;
  size: string;
  quantity: number;
}

export interface ShoppingCartContextType {
  cart: CartItem[] | null;
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearFromCart: (id: number, size?: string) => void;
  clearCart: () => void;
  numItems: number;
  getNumInCart: (id: number, size?: string) => number;
  shipping: number;
  subtotal: number;
  total: number;
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

  // reduce a single item by 1
  const removeFromCart = (item: CartItem) => {
    const { id, size } = item;

    setCart((prevCart) =>
      prevCart
        ? prevCart.reduce((nextCart, item) => {
            if (item.id === id && (!size || item.size === size)) {
              // If the quantity is greater than 1, decrement it
              if (item.quantity > 1) {
                nextCart.push({ ...item, quantity: item.quantity - 1 });
              }
              // Else, remove it entirely (do not push to nextCart)
            } else {
              // Keep all other items
              nextCart.push(item);
            }
            return nextCart;
          }, [] as CartItem[])
        : [],
    );
  };

  // clear item entirely
  const clearFromCart = (id: number, size?: string) => {
    setCart((prevCart) =>
      prevCart
        ? prevCart.filter(
            (item) => !(item.id === id && (!size || item.size === size)),
          )
        : [],
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

  const subtotal =
    cart?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;

  const shipping = 5.99;

  const total = subtotal || 0 + shipping;

  return (
    <ShoppingCartContext
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        numItems,
        getNumInCart,
        clearFromCart,
        shipping,
        subtotal,
        total,
      }}
    >
      {children}
    </ShoppingCartContext>
  );
};
