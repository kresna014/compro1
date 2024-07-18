import Image from "next/image";
import React from "react";
import SupportImg from "@/app/_components/Img/telephone.png";
import { CheckBadgeIcon, CheckIcon } from "@heroicons/react/16/solid";

const CustomerSupport = () => {
  return (
    // <div className="pt-[5rem] pb-[3rem]">
    //     <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center">
    //         <div className="order-2 lg:order-1">
    //             <Image src={SupportImg} alt="support" className="px-20"/>
    //         </div>
    //         <h1 className="flex text-[20px] md:text-[25px] lg:text-[28px] text-black font-bold leading-[2rem] md:leading-[3rem]">
    //             Customer support is our main priority with their hundred percents satisfaction.
    //         </h1>
    //         <p className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px]">8
    //         </p>
    //         <div className="flex items-center mb-[1rem] space-x-3"></div>
    //         <CheckIcon className="w=-[1.3rem] h-[1.3rem] text-red-600" />
    //         <p className="text-[17px] text-black font-[500]">Consultation</p>
    //     </div>
    // </div>

    <div>
      <div className="flex justify-around px-5 lg:px-40 lg:pt-[100px]">
        <div>
          <Image src={SupportImg} alt="support" className="px-20 hidden lg:block w-[500px]" />
        </div>

        <div>
          <div className="">
            <p className="text-xl text-black font-bold">
              Customer support is our main priority with their hundred percents
              satisfaction.
            </p>
          </div>
          <div className="flex pt-5">
          <CheckIcon className=" h-[1.3rem] flex text-red px-16"/>
          <p className="text-[17px] text-black font-[500]">Discuss</p>
          </div>
          <div className="flex pt-5">
          <CheckIcon className=" h-[1.3rem] flex text-red px-16"/>
          <p className="text-[17px] text-black font-[500]">Deal and Payment</p>
          </div>
          <div className="flex pt-5">
          <CheckIcon className=" h-[1.3rem] flex text-red px-16"/>
          <p className="text-[17px] text-black font-[500]">Materi</p>
          </div>
          <div className="flex pt-5">
          <CheckIcon className=" h-[1.3rem] flex text-red px-16"/>
          <p className="text-[17px] text-black font-[500]">Time Line</p>
          </div>
          <div className="flex pt-5">
          <CheckIcon className=" h-[1.3rem] flex text-red px-16"/>
          <p className="text-[17px] text-black font-[500]">Start Working</p>
          </div>
          <div className="flex pt-5">
          <CheckIcon className=" h-[1.3rem] flex text-red px-16"/>
          <p className="text-[17px] text-black font-[500]">Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
