import React from "react";

export default function Testimoni() {
  const corou = [
    {
      name: '"This service is very helpful"',
      hrefKanan: "#slide2",
      hrefKiri: "#slide3",
      id: "slide1",
    },
    {
      name: '"Very helpful for our company"',
      hrefKanan: "#slide3",
      hrefKiri: "#slide2",
      id: "slide2",
    },
    {
      name: '"Attractive and accurate design"',
      hrefKanan: "#slide1",
      hrefKiri: "#slide3",
      id: "slide3",
    },
  ];

  return (
    <div className="bg-white">
      <h1 className="text-black font-bold flex justify-center text-5xl pt-5">
        TESTIMONI
      </h1>
      <div className="carousel w-[1000px] flex mx-auto rounded-2xl mt-6">
        {corou.map((item, idx) => (
          <div
            key={idx}
            id={item.id}
            className="carousel-item relative w-full h-52 bg-gray-400"
          >
            <p className="w-full text-white text-center flex justify-center items-center text-3xl">
              {item.name}
            </p>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={item.hrefKiri} className="btn btn-circle">
                ❮
              </a>
              <a href={item.hrefKanan} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}

        {/* <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
