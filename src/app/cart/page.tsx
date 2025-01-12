"use client";
import Image from "next/image";
import Link from "next/link";

import OrderSummary from "@/components/OrderSummary";
import ShoppingCard from "@/components/ShoppingCard";
import { useCart } from "@/context/CartContext";

const Page = () => {
  const { cart } = useCart();

  return (
    <section className="px-6 py-5 flex flex-col gap-8 sm:gap-12 lg:py-12 lg:px-32">
      <div className="flex gap-2 py-4">
        <Link href={"/"}>
          <Image
            src={"/assets/icons/arrowLeft.svg"}
            alt="arrow left"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </Link>
        <p>Back to Catalog</p>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <p className="text-grey-medium text-2xl lg:text-4xl font-bold">Your Cart</p>
        <p> {cart.length} items</p>
      </div>
      <div className="flex flex-col sm:gap-20 lg:flex-row items-center sm:items-start">
        {!cart || cart.length === 0 ? (
          <div className="w-full flex items-center justify-center">
            There is any game selected.
          </div>
        ) : (
          <div className="flex flex-col w-full">
            <ShoppingCard />
          </div>
        )}
        <OrderSummary />
      </div>
    </section>
  );
};

export default Page;
