import { Filters } from "../../common/components/filters/Filters";
import { ProductCard } from "../../common/components/productCard/ProductCard";
import { BestSellerProducts } from "./BestSellerProducts";

export const HomeView = () => {
  return (
    <div className="border border-orange-500">
      <div className="border border-green-500 flex flex-col 2xl:justify-center lg:flex-row max-w-7xl 2xl:max-w-full mx-auto px-5 xl:px-0">
        <Filters />
        <div className="border border-black">
          <div>Barra de búsqueda con dropdown</div>
          <div className="grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-[51px] ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>

      <div className="border-2 bg-red-300 w-full max-w-6xl mx-auto">
        CTA Banner slider
      </div>

      <BestSellerProducts />
    </div>
  );
};
