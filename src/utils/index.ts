import { Game } from "@/types";

export const calculatePrice = (array: Game[]) => {
  const total = array.reduce((accumulator, game) => {
    return accumulator + game.price;
  }, 0);
  return parseFloat(total.toFixed(2));
};
