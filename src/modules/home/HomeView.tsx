import { Filters } from "../../common/components/filters/Filters";
import { ProductCard } from "../../common/components/productCard/ProductCard";

export const HomeView = () => {
  return (
    <div className="border-2 border-orange-500">
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto px-5">
        <Filters />
        <div className="border-4 border-black">
          <div>Barra de búsqueda con dropdown</div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[51px] ">
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

      <div className="border-2 bg-red-300 w-full max-w-6xl mx-auto">
        Best Seller Products
      </div>
    </div>
  );
};
