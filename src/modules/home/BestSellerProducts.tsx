import { ProductCard } from "../../common/components/productCard/ProductCard";
import { phonesList } from "./utils/mockedData";

export const BestSellerProducts = () => {
  return (
    <div className="border border-green-300 flex flex-col items-center max-w-7xl mx-auto mb-40">
      <h1 className="text-blue-3 text-lg md:text-xl lg:text-[22px] font-bold mb-11">
        Nuestros Productos Más Vendidos
      </h1>
      <div className="flex flex-row justify-start gap-x-9 w-80 md:w-[600px] lg:w-[800px] xl:w-full overflow-x-scroll">
        {phonesList.map((phone) => {
          return <ProductCard key={phone.id} product={phone} />;
        })}
      </div>
    </div>
  );
};
