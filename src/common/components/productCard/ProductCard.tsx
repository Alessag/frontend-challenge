import { Rating } from "@mui/material";
import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Product } from "../../../modules/home/utils/types";

interface ProductCardProps {
  product: Product;
  handleFavorite?: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  handleFavorite,
}) => {
  return (
    <div className="rounded-xl md:w-96">
      <div className="relative bg-slate-100">
        <div
          className="absolute top-4 right-5 z-10 text-3xl text-gray-1 cursor-pointer"
          onClick={() => {
            if (handleFavorite) {
              handleFavorite(product.id);
            }
          }}
        >
          {product.favorite ? <AiFillHeart color="blue" /> : <AiOutlineHeart />}
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[445px] object-cover"
        />
      </div>
      <div className="bg-white flex justify-between pt-2 px-6 pb-6">
        <div>
          <p className="text-blue-3 text-base font-semibold">{product.name}</p>
          <div className="flex h-auto text-2xl mb-5">
            <Rating name="product-reviews" value={product.reviews} readOnly />
          </div>
          <p className="text-sm text-gray-1 font-semibold">
            $120 p/semana <br /> $520 p/mes
          </p>
        </div>
        <div className="text-right">
          <p className="text-blue-2 font-bold text-3xl md:text-[40px]">
            ${product.currentPrice}
          </p>
          <p className="text-gray-1 font-semibold mb-2">
            <del>${product.originalPrice}</del>
          </p>
          <button className="bg-yellow- text-blue-2 text-base font-semibold w-28 h-11 rounded-md cursor-pointer">
            Lo quiero
          </button>
        </div>
      </div>
    </div>
  );
};
