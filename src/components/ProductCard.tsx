import { FC } from "react";
import Image from "next/image";

import { useCart } from "@/context/CartContext";
import { Game } from "@/types";

interface ProductCardProps {
  games: Game[];
}

const ProductCard: FC<ProductCardProps> = ({ games }) => {
  const { cart, addToCart, removeCard } = useCart();

  const handleCartAction = (game: Game) => {
    if (cart.some((cartGame) => cartGame.id === game.id)) {
      removeCard(game.id);
    } else {
      addToCart(game);
    }
  };

  return games.map((game) => (
    <div
      key={game.id}
      className="w-full sm:max-w-[380px] h-[436px] border border-grey-secondary p-6 rounded-2xl flex flex-col gap-5"
    >
      <div className="w-full h-[240px] relative">
        <Image
          src={game.image}
          alt={game.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="uppercase font-bold text-grey-neutral-neutral">
          {game.genre}
        </p>
        <div className="flex justify-between">
          <p className="font-bold">{game.name}</p>
          <p>${game.price}</p>
        </div>
      </div>
      <button
        className={`py-5 border m-auto w-full rounded-lg ${
          cart.some((cartGame) => cartGame.id === game.id)
            ? "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500"
            : "bg-grey-background text-grey-medium hover:bg-grey-neutral hover:text-white focus:ring-2 focus:ring-grey-neutral"
        }`}
        onClick={() => handleCartAction(game)}
      >
        {cart.some((cartGame) => cartGame.id === game.id) ? "Remove" : "Add to cart"}
      </button>
    </div>
  ));
};

export default ProductCard;
