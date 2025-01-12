// src/__tests__/OrderSummary.test.tsx

import { render, screen } from "@testing-library/react";
import OrderSummary from "@/components/OrderSummary";
import "@testing-library/jest-dom"; 
import { CartContext, CartProvider } from "@/context/CartContext";

const renderWithContext = (ui: JSX.Element) => {
  return render(<CartProvider>{ui}</CartProvider>);
};

describe("OrderSummary", () => {
  it("should display the correct order summary with 0 items and the Checkout button disabled", () => {
    renderWithContext(<OrderSummary />);

    const button = screen.getByTestId("checkout-button");

    expect(screen.getByText("Order Summary")).toBeInTheDocument();
    expect(screen.getByText("0 items")).toBeInTheDocument();
    expect(screen.getByText("Order Total")).toBeInTheDocument();
    expect(screen.getByText("$ 0")).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("should display items in the cart", () => {
    const mockCart = [
      {
        id: "1",
        genre: "Action",
        image: "/assets/game-images/cyberpunk2077.jpeg",
        name: "Cyberpunk 2077",
        description: "An open-world, action-adventure story set in Night City.",
        price: 59.99,
        isNew: true,
      }
    ];

    const renderWithContext = (ui: JSX.Element, mockCart: any[]) => {
      return render(
        <CartContext.Provider value={{ cart: mockCart, addToCart: jest.fn(), removeCard: jest.fn() }}>
          {ui}
        </CartContext.Provider>
      );
    };
    renderWithContext(<OrderSummary />, mockCart);

    const button = screen.getByTestId("checkout-button");

    expect(screen.getByText(mockCart[0].name)).toBeInTheDocument();
    expect(screen.getAllByText(`$ ${mockCart[0].price}`)[0]).toBeInTheDocument();
    expect(button).toBeEnabled();
  });
});
