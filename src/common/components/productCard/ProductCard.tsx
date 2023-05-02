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
    <div className="w-64 xl:w-96 mb-4 xl">
      <div className="relative bg-gray-2">
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
          className="w-full h-64 xl:h-[445px] object-cover rounded-t-xl"
        />
        {product.discount && product.discount > 0 && (
          <div className="absolute left-2 xl:left-4 bottom-3 xl:bottom-5 w-12 xl:w-[98px] h-12 xl:h-[98px] bg-red xl:text-4xl rounded-full flex justify-center items-center font-bold text-white">
            {product.discount}%
          </div>
        )}
      </div>
      <div className="bg-white flex justify-between pt-2 px-3 xl:px-6 pb-6 rounded-b-xl">
        <div>
          <p className="text-blue-3 text-sm xl:text-base font-semibold">
            {product.name}
          </p>
          <div className="flex h-auto text-2xl mb-2 xl:mb-5">
            <Rating name="product-reviews" value={product.reviews} readOnly />
          </div>
          <p className="text-xs xl:text-sm text-gray-1 font-semibold">
            $120 p/semana <br /> $520 p/mes
          </p>
        </div>
        <div className="text-right">
          <p className="text-blue-2 font-bold text-2xl xl:text-3xl md:text-[40px]">
            ${product.currentPrice}
          </p>
          <p className="text-gray-1 text-xs lg:text-base font-semibold mb-2">
            <del>${product.originalPrice}</del>
          </p>
          <button className="bg-yellow text-blue-2 text-xs xl:text-base font-semibold w-16 xl:w-28 h-6 xl:h-11 rounded-md cursor-pointer">
            Lo quiero
          </button>
        </div>
      </div>
    </div>
  );
};
