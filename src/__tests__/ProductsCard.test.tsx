import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { CartContext, CartProvider } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { Game } from "@/types";

const mockGame: Game = {
  id: "1",
  genre: "Action",
  image: "/assets/game-images/cyberpunk2077.jpeg",
  name: "Cyberpunk 2077",
  description: "An open-world, action-adventure story set in Night City.",
  price: 59.99,
  isNew: true,
};

const renderWithContext = (ui: JSX.Element, mockCart: any[]) => {
  return render(
    <CartContext.Provider value={{ cart: mockCart, addToCart: jest.fn(), removeCard: jest.fn() }}>
      {ui}
    </CartContext.Provider>
  );
};

describe("ProductCard", () => {
  renderWithContext(<ProductCard games={[mockGame]}/>, [mockGame]);

  it("should render product information correctly", () => {

    const image = screen.getByTestId(mockGame.id);

    expect(screen.getByText(mockGame.name)).toBeInTheDocument();
    expect(screen.getByText(mockGame.genre)).toBeInTheDocument();
    
    expect(image).toBeInTheDocument();
  });

  it("should display 'Add to cart' button initially", () => {
    renderWithContext(<ProductCard games={[mockGame]}/>, []);
    // screen.debug()

    expect(screen.getByText("Add to cart")).toBeInTheDocument();
  });
});
