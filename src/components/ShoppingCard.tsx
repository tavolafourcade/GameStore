"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import React from "react";

const ShoppingCard = () => {
  const { cart, removeCard } = useCart();

  return cart.map((game) => (
    <div
      key={game.id}
      className="relative py-5 px-4 flex border-b flex-1 w-full"
    >
      <div className="flex flex-col lg:flex-row w-full">
        <div className="lg:hidden flex w-[259px] h-[136px] relative">
          <Image
            src={game.image}
            alt={game.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="hidden lg:block flex-shrink-0 relative lg:w-64">
          <Image
            src={game.image}
            alt={game.name}
            layout="fill"
            objectFit="cover"
            className="h-full"
          />
        </div>
        <div className="flex justify-between lg:ml-6 w-full">
          <div className="flex flex-col gap-3 lg:gap-2 justify-between w-full lg:pr-4">
            <div className="flex flex-col gap-3">
              <p className="uppercase font-bold text-grey-neutral-neutral mt-4 lg:mt-2 text-sm lg:text-base">
                {game.genre}
              </p>
              <p className="font-bold text-lg lg:text-xl">{game.name}</p>
              <p className="text-base">{game.description}</p>

            </div>
            <div className="flex items-end justify-end mt-11 lg:mt-9">
              <p className="font-bold text-lg lg:text-xl">${game.price}</p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"assets/icons/close.svg"}
        alt="close"
        width={24}
        height={24}
        className="self-start cursor-pointer absolute top-5 right-4"
        onClick={() => removeCard(game.id)}
      />
    </div>
  ));
};

export default ShoppingCard;
