"use client";
import { useCart } from "@/context/CartContext";
import { calculatePrice } from "@/utils";
import { useEffect, useState } from "react";

const OrderSummary = () => {
  const { cart } = useCart();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(calculatePrice(cart));
  }, [cart]);

  return (
    <div className="w-full sm:px-6 sm:py-8 lg:p-0 mt-12 lg:mt-0">
      <div className="border border-grey-secondary rounded-lg py-8 px-6 w-full">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-xl lg:text-2xl">Order Summary</p>
          <p className="text-lg">{cart.length} items</p>
        </div>
        <ul className="pt-5 pb-6">
          {cart.map((game) => (
            <li key={game.id} className="grid grid-cols-[75%,25%]">
              <p> {game.name} </p>
              <p className="flex justify-end">$ {game.price} </p>
            </li>
          ))}
        </ul>
        <div className="w-full border"></div>
        <div className="pb-5 pt-6 flex justify-between items-center">
          <p className="font-bold text-xl">Order Total</p>
          <p> $ {totalPrice}</p>
        </div>
      </div>
      <button
        data-testid="checkout-button"
        className={`mt-8 py-5 w-full rounded-lg text-white transition-colors ${
          totalPrice === 0
            ? "bg-disabled cursor-not-allowed"
            : "bg-grey-subtext hover:bg-grey-neutral"
        }`}
        disabled={totalPrice === 0}
        aria-disabled={totalPrice === 0}
        aria-label={
          totalPrice === 0
            ? "Empty Cart"
            : "Proceed with Checkout"
        }
      >
        Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
