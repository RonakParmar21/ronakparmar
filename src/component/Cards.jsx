import React from "react";
import github from "../assets/Github.png";

const Cards = ({ item }) => {
  return (
    <div className="border border-[#378785] rounded-lg w-[300px] lg:w-[400px] bg-red-50">
      <img src={item.image} alt="" className="rounded-lg" />
      <div className="p-4">
        <h1 className="font-semibold text-xl mb-2">{item.title}</h1>
        <p>{item.desc}</p>
        <div className="flex gap-3 mt-4">
          <button className="bg-[#378785] text-white px-3 py-2 rounded-md">
            <a
              href={item.live !== "" ? item.live : item.github}
              target="_blank"
            >
              Live Preview
            </a>
          </button>

          <button className="bg-black text-white px-3 py-2 rounded-md">
            <a href={item.github} target="_blank" className="flex gap-1">
              <img src={github} alt="" className="w-6" />
              Github Link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
