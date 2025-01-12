import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import Catalog from "@/components/Catalog";
import { Game } from "@/types";

import fetchMock from "jest-fetch-mock";
import { CartProvider } from "@/context/CartContext";
fetchMock.enableMocks();

const mockGame: Game = {
  id: "1",
  genre: "Action",
  image: "/assets/game-images/cyberpunk2077.jpeg",
  name: "Cyberpunk 2077",
  description: "An open-world, action-adventure story set in Night City.",
  price: 59.99,
  isNew: true,
};

describe("Catalog", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    fetchMock.resetMocks();
  });

  it("should render the loading spinner initially", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ games: [] }));

    render(
      <CartProvider>
        <Catalog genre="Action" />
      </CartProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Loading...")).toBeInTheDocument();
      expect(screen.getByText("See more")).toBeInTheDocument();
    });
  });

  it("should render the games after fetching", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: () => Promise.resolve({ games: [mockGame] }),
    });

    render(
      <CartProvider>
        <Catalog genre="Action" />
      </CartProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(mockGame.name)).toBeInTheDocument();
    });
  });
});
