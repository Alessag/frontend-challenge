import React from "react";
import { Product } from "../../../modules/home/utils/types";
import { productList } from "../../../modules/home/utils/mockedData";

const useBestSellers = () => {
  const [bestSellers, setBestSellers] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        // const response = await fetch("API_URL");
        // const data = await response.json();
        setBestSellers(productList.slice(0, 4));
      } catch (error) {
        console.error(error);
      }
    };

    fetchBestSellers();
  }, []);

  return bestSellers;
};

export default useBestSellers;
