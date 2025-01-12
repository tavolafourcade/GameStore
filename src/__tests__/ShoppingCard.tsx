import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { CartContext } from "@/context/CartContext";
import ShoppingCard from "@/components/ShoppingCard";
import { Game } from "@/types";
import Image from "next/image";

const mockGame: Game = {
  id: "1",
  genre: "Action",
  image: "/assets/game-images/cyberpunk2077.jpeg",
  name: "Cyberpunk 2077",
  description: "An open-world, action-adventure story set in Night City.",
  price: 59.99,
  isNew: true,
};

const renderWithContext = (ui: JSX.Element, mockCart: any[], updateCart: any) => {
  const mockAddToCart = (game: Game) => updateCart([...mockCart, game]);
  const mockRemoveCard = (gameId: string) => updateCart(mockCart.filter(game => game.id !== gameId));

  return render(
    <CartContext.Provider value={{ cart: mockCart, addToCart: mockAddToCart, removeCard: mockRemoveCard }}>
      {ui}
    </CartContext.Provider>
  );
};

describe("ShoppingCard", () => {
  it("should render the games in the cart", () => {
    const mockCart = [mockGame];

    renderWithContext(<ShoppingCard />, mockCart, () => {});

    const image = screen.getByTestId(mockGame.id);

    expect(screen.getByText(mockGame.name)).toBeInTheDocument();
    expect(screen.getByText(mockGame.genre)).toBeInTheDocument();
    expect(screen.getByText(mockGame.description || "")).toBeInTheDocument();
    expect(screen.getByText(`$${mockGame.price}`)).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
