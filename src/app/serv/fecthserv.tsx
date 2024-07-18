import React from "react";
import { text } from "stream/consumers";
import Image from "next/image";
import { imageOptimizer } from "next/dist/server/image-optimizer";
import { title } from "process";


export default async function Fecthserv() {
  const team = await fetch(
    "https://cdn.contentful.com/spaces/um20mxssqeys/environments/master/entries?access_token=0Leq1LZDD3K7Gai9FYyO7CjRhPJVcMpY5r8LgJ_E-c0&",
    {
      method: "GET",
      cache: "no-cache"
    }
  );
  const data = await team.json();
  console.log(data.items[0].fields.judul);
  //   console.log(data.items[0]);
  return (
    <div>
      {/* <Template tittle={data.items[0].fields.judul} text={data.items[0].fields.content.content[0].content[0].value} image={data.includes.Asset[0].fields.file.url} /> */}
      <div className="flex-row my-5">
        <div className="flex gap-4 my-5 px-10 w-auto flex-col lg:flex-row">
          <Image
            src={data.includes.Asset[1].fields.file.url}
            alt=""
            width={500}
            height={500}
            className="rounded-3xl lg:w-1/2"
          
          />
          <div className="flex flex-col items-center justify-center px-10">
            <h1 className="flex justify-center items-center font-bold">
              {data.items[3].fields.judul} 
            </h1>
            <p className="flex justify-center items-center px-12 py-5 font-semibold bg-gray-300 text-black rounded-3xl">
              {data.items[3].fields.content.content[0].content[0].value}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-row my-5">
        <div className="flex gap-4 my-5 px-10 w-auto flex-col lg:flex-row">
          <Image
            src={data.includes.Asset[2].fields.file.url}
            alt=""
            width={500}
            height={500}
            className="rounded-3xl lg:w-1/2"
          
          />
          <div className="flex flex-col items-center justify-center px-10">
            <h1 className="flex justify-center items-center font-bold">
              {data.items[2].fields.judul} 
            </h1>
            <p className="flex justify-center items-center px-12 py-5 font-semibold bg-gray-300 text-black rounded-3xl">
              {data.items[2].fields.content.content[0].content[0].value}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-row my-5">
        <div className="flex gap-4 my-5 px-10 w-auto flex-col lg:flex-row">
          <Image
            src={data.includes.Asset[0].fields.file.url}
            alt=""
            width={500}
            height={500}
            className="rounded-3xl lg:w-1/2"
          
          />
          <div className="flex flex-col items-center justify-center px-10">
            <h1 className="flex justify-center items-center font-bold">
              {data.items[1].fields.judul} 
            </h1>
            <p className="flex justify-center items-center px-12 py-5 font-semibold bg-gray-300 text-black rounded-3xl">
              {data.items[0].fields.content.content[0].content[0].value}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-row my-5">
        <div className="flex gap-4 my-5 px-10 w-auto flex-col lg:flex-row">
          <Image
            src={data.includes.Asset[3].fields.file.url}
            alt=""
            width={500}
            height={500}
            className="rounded-3xl lg:w-1/2"
          
          />
          <div className="flex flex-col items-center justify-center px-10">
            <h1 className="flex justify-center items-center font-bold">
              {data.items[0].fields.judul} 
            </h1>
            <p className="flex justify-center items-center px-12 py-5 font-semibold bg-gray-300 text-black rounded-3xl">
              {data.items[0].fields.content.content[0].content[0].value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}