import { calculatePrice } from "@/utils";
import { Game } from "@/types";

describe("calculatePrice", () => {
  it("should calculate the total price correctly", () => {
    const games: Game[] = [
      {
        id: "1",
        genre: "Action",
        image: "/assets/game-images/cyberpunk2077.jpeg",
        name: "Cyberpunk 2077",
        description: "An open-world, action-adventure story set in Night City.",
        price: 59.99,
        isNew: true,
      },
      {
        id: "2",
        genre: "RPG",
        image: "/assets/game-images/thewitcher3.jpeg",
        name: "The Witcher 3: Wild Hunt",
        description:
          "A story-driven, next-generation open world role-playing game.",
        price: 39.99,
        isNew: false,
      },
    ];

    const total = calculatePrice(games);
    expect(total).toBe(99.98);
  });

  it("should return 0 for an empty array", () => {
    const games: Game[] = [];
    const total = calculatePrice(games);
    expect(total).toBe(0);
  });
});
