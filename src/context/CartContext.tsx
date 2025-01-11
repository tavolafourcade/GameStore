"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Game } from "@/types";

interface CartContextProps {
  cart: Game[];
  addToCart: (game: Game) => void;
  removeGame: (gameId: string) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Game[]>([]);

  const addToCart = (game: Game) => {
    setCart((prevCart) => [...prevCart, game]);
  };

  const removeGame = (gameId: string) => {
    setCart((prevCart) => prevCart.filter((game) => game.id !== gameId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeGame }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
