"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-grey-background flex justify-between px-6 py-5 sm:px-6 lg:px-32 text-2xl font-bold text-grey-subtext" data-testid="navbar-container">
      <Link href={"/"}>
        <p className="cursor-pointer">GamerShop</p>
      </Link>
      <Link href={"cart"}>
        <Image
          src="/assets/icons/shoppingCart.svg"
          alt="shopping icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Navbar;
