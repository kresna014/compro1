import Link from "next/link";
import React from "react";
import Logo1 from "@/app/_components/Img/logoskyroof.svg";
import Image from "next/image";
import Button1 from "./Button/Button1";
import Button2 from "./Button/Button2";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
import Button3 from "./Button/Button3";

interface Props {
  openNav : ()=> void;
}

const Navbar = ({openNav}: Props) => {
  return (
    <div className="h-[12vh] bg-white shadow-md">
      <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh]">
        <Image src={Logo1} width={200} alt="" />
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex gap-5">
            <p className="text-[20px] cursor-pointer text-black font-bold transition-all duration-200 hover:scale-125">
              <Link href="/">HOME</Link>
            </p>
            <p className="text-[17px] cursor-pointer text-black font-bold transition-all duration-200 hover:scale-125">
              <Link href="/about">ABOUT</Link>
            </p>
            <p className="text-[20px] cursor-pointer text-black font-bold transition-all duration-200 hover:scale-125">
              <Link href="/serv">SERVICE</Link>
            </p>
            <p className="text-[17px] cursor-pointer text-black font-bold transition-all duration-200 hover:scale-125">
              <Link href="/Team">TEAM</Link>
            </p>
          </div>
          {/* <div className="flex items-center space-x-2 md:space-x-5">
            <Button3 text="CONTACT" />
          </div> */}
        </div>
            <Bars3BottomRightIcon onClick={openNav} className=" flex lg:hidden w-[1.5rem] lg-hidden h-[1.5rem] text-slate-900 cursor-pointer"/>
      </div>
    </div>
  );
}

export default Navbar;
