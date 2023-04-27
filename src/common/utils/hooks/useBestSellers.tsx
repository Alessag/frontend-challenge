import React from "react";

import { Product } from "../../../modules/home/utils/types";
import { productList } from "../../../modules/home/utils/mockedData";

const useBestSellers = () => {
  const [bestSellers, setBestSellers] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchBestSellers = async () => {
      setLoading(true);
      try {
        const response = await new Promise<Product[]>((resolve) => {
          setTimeout(() => {
            resolve(productList);
          }, 5000);
        });
        setBestSellers(response.slice(0, 4));
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchBestSellers();
  }, []);

  return { bestSellers, loading };
};

export default useBestSellers;
