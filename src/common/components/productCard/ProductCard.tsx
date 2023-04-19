import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const ProductCard = () => {
  return (
    <div className="border-2 border-orange-700 rounded-xl">
      <div className="border-2 border-blue-300">
        <img
          src="https://images.pexels.com/photos/9045119/pexels-photo-9045119.jpeg"
          alt="Product Image"
          className="w-full object-cover"
        />
      </div>
      <div className="border-2 border-black bg-white flex justify-between pt-2 px-6 pb-6">
        <div>
          <p className="text-blue-3 text-base font-semibold">Product name</p>
          <div className="flex h-auto text-2xl mb-5">
            <AiFillStar color="#FFD300" />
            <AiFillStar color="#FFD300" />
            <AiFillStar color="#FFD300" />
            <AiFillStar color="#FFD300" />
            <AiOutlineStar color="#FFD300" />
          </div>
          <p className="text-xs">
            $120 p/semana <br /> $520 p/mes
          </p>
        </div>
        <div className="text-right">
          <p className="text-blue-2 font-bold text-4xl">$3,499</p>
          <p className="text-gray-1 font-semibold">
            <del>$4,100</del>
          </p>
          <button>Lo quiero</button>
        </div>
      </div>
    </div>
  );
};
