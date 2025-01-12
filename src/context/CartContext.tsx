"use client";

import { FC, createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Game } from "@/types";

interface CartContextProps {
  cart: Game[];
  addToCart: (game: Game) => void;
  removeCard: (gameId: string) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Game[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (game: Game) => {
    setCart((prevCart) => [...prevCart, game]);
  };

  const removeCard = (gameId: string) => {
    setCart((prevCart) => prevCart.filter((game) => game.id !== gameId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeCard }}>
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
