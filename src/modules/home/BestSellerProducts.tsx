// import { Skeleton } from "@mui/material";

import { ProductCard } from "../../common/components/productCard/ProductCard";
import useBestSellers from "../../common/utils/hooks/useBestSellers";

export const BestSellerProducts = () => {
  const { bestSellers, loading } = useBestSellers();

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto mb-10">
      <h1 className="title">Nuestros Productos Más Vendidos</h1>
      <div className="flex flex-row justify-start gap-x-9 w-80 md:w-[600px] lg:w-[800px] xl:w-full overflow-x-scroll">
        {loading
          ? "Cargando productos..."
          : bestSellers.length
          ? bestSellers.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })
          : "No hay productos disponibles"}
      </div>
    </div>
  );
};
