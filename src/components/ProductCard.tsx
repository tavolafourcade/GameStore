import React from "react";
import Image from "next/image";

import { useCart } from "@/context/CartContext";
import { Game } from "@/types";

interface ProductCardProps {
  games: Game[];
}

const ProductCard: React.FC<ProductCardProps> = ({ games }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (game: Game) => {
    addToCart(game);
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
        className="py-5 border border-grey-medium m-auto w-full rounded-lg"
        onClick={() => handleAddToCart(game)}
      >
        Add to cart
      </button>
    </div>
  ));
};

export default ProductCard;
