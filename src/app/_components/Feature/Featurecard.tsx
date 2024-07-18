import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
}

const Featurecard = ({ image, title }: Props) => {
  return (
    <div className="text-center bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-all flex flex-col mx-auto items-center duration-300 cursor-pointer hover:scale-105">
      <Image
        src={image}
        alt="icon"
        width={2000}
        height={2000}
        className="h-44 w-80 bg-cover"
      />
      <h1 className="text-[20px] mt-[1.4rem] font-[500] text-violet-800">
        {title}
      </h1>
      <p className="mt-[1.4rem] text-lg text-red-600 font-[200] cursor-pointer hover:text-red-800">
        Learn More
      </p>
    </div>
  );
};

export default Featurecard;
