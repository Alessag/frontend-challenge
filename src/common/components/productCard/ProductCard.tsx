import React from "react";
import { AiFillStar, AiOutlineStar, AiOutlineHeart } from "react-icons/ai";

export const ProductCard = () => {
  return (
    <div className="rounded-xl md:w-96">
      <div className="relative bg-slate-100">
        <div className="absolute top-4 right-5 z-10 text-3xl text-gray-1 cursor-pointer">
          <AiOutlineHeart />
        </div>
        <img
          src="https://images.samsung.com/is/image/samsung/p6pim/latin/2302/gallery/latin-galaxy-s23-s918-sm-s918bliugto-534860236?$1300_1038_PNG$"
          alt="Product Image"
          className="w-full max-h-[445px] object-cover"
        />
      </div>
      <div className="bg-white flex justify-between pt-2 px-6 pb-6">
        <div>
          <p className="text-blue-3 text-base font-semibold">Galaxy A03</p>
          <div className="flex h-auto text-2xl mb-5">
            <AiFillStar color="#FFD300" />
            <AiFillStar color="#FFD300" />
            <AiFillStar color="#FFD300" />
            <AiFillStar color="#FFD300" />
            <AiOutlineStar color="#FFD300" />
          </div>
          <p className="text-sm text-gray-1 font-semibold">
            $120 p/semana <br /> $520 p/mes
          </p>
        </div>
        <div className="text-right">
          <p className="text-blue-2 font-bold text-3xl md:text-[40px]">
            $3,499
          </p>
          <p className="text-gray-1 font-semibold mb-2">
            <del>$4,100</del>
          </p>
          <button className="bg-yellow- text-blue-2 text-base font-semibold w-28 h-11 rounded-md cursor-pointer">
            Lo quiero
          </button>
        </div>
      </div>
    </div>
  );
};
