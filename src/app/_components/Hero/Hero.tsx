import React from "react";
import Image from "next/image";
import logo2 from "@/app/components/Img/image12.svg";
import Button1 from "../Button/Button1";


const Hero = () => {
  return (
    <div>
      <div className="flex w-full justify-center items-center">
        <video controls autoPlay muted loop src={"https://firebasestorage.googleapis.com/v0/b/compro-89efd.appspot.com/o/Video.mp4?alt=media&token=00290850-5b4c-452a-bf61-3a23749e4e66"} style={{ width: "full", height:"700px", }} className="rounded-3xl" />
      </div>
      <div className="md:mx-auto items-center justify-center px-10 text-[20px] pt-1 m-10 text-black">
        {/* <div className="col-span-2"> */}
        <div>
          <div className="text-center font-semibold px-[50px]">
            <p>
              Skyroof Studio is a company that provides graphic design and
              multimedia services and is an extension of PT. Buanatech.
            </p>
          </div>
          <div className="text-center font-semibold">
            <p>
              Established in 2012, our goal is to offer professional and
              high-quality graphic design services with a focus on artistry and
              creativity.
            </p>
          </div>
          <div className="text-center font-semibold">
            <p>
              We prioritize customer needs to ensure they receive precise visual
              design or planning that effectively communicates through visual
              media.
            </p>
          </div>

          <div className="flex justify-center space-x-4 md:space-x-6 pt-5">
            <Button1 text="More Information"/>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Hero;
