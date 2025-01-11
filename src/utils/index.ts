import { Game } from "@/types";

export const calculatePrice = (array: Game[]) => {
  return array.reduce((accumulator, game) => {
    return accumulator + game.price;
  }, 0);
};
