import Image from "next/image";
import React from "react";
import LogoAbout from "@/app/_components/Img/About2.svg";

export default function Bg() {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col max-w-7xl gap-5 mx-auto">
        <Image src={LogoAbout} alt="" className="w-full items-center" />
        <div className="lg:absolute lg:font-bold p-5 text-gray-200 bg-gray-600/50 z-60 justify-end top-[50%] left-[50%] rounded-2xl">
          <p>
            Articles of Incorporation - No. 1, Dated September 3, 2012 - Notary
            Risna Rusmarti, SH
          </p>
          <p>
            Articles of Amendment - No. 3, Dated February 18, 2015 - Notary
            Retno Isworowati, SH, SP.1
          </p>
          <p>
            Company Registration Certificate (TDP) - 10 111 46 222 69, Dated
            April 12, 2016
          </p>
          <p>
            Business License (SIUP) - No. 0115/IUP/IV/2016/BPPT, Dated April 12,
            2016
          </p>
          <p>Taxpayer Identification Number (NPWP) - 31.584.127.0-428.000</p>
        </div>
      </div>
    </div>
  );
}
