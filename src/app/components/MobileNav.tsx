import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navOpenStyle = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={
        `transform transition-all ${navOpenStyle} duration-200 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-red-500`
      }
    >
      <XMarkIcon
        onClick={closeNav}
        className="w-[2rem] h-[2rem] absolute top-[2rem] text-white z-[202] right-[2rem] cursor-pointer"
      />

      <div className=" relative z-[201] space-y-10 flex flex-col justify-center h-[100%] items-center">
        <p className="text-[25px] cursor-pointer text-white hover:text-yellow-300">
          <Link href="/">Home</Link>
        </p>
        <p className="text-[25px] cursor-pointer text-white hover:text-yellow-300  transition-all duration-200">
          <Link href="/about">About</Link>
        </p>
        <p className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
          <Link href="/serv">Service</Link>
        </p>
        <p className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
          <Link href="/Team">Team</Link>
        </p>
      </div>
    </div>
  );
};

export default MobileNav;
