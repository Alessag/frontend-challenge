import React from "react";
import { useLocation } from "react-router-dom";

import { FilterOptions } from "../../common/components/filters/Filters";
import { ProductList } from "./ProductList";
import { ProductCarousel } from "./ProductCarousel";
import { BestSellerProducts } from "./BestSellerProducts";
import { parseCategory } from "./utils/functions";
import { productList } from "./utils/mockedData";
import { Product } from "./utils/types";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export const HomeView = () => {
  const location = useLocation();
  const [searchValue, setSearchValue] = React.useState("");
  const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([]);
  const [categoryProducts, setCategoryProducts] = React.useState<Product[]>([]);
  const [selectedFilters, setSelectedFilters] = React.useState<FilterOptions>({
    brands: [],
    minPrice: 0,
    maxPrice: 1000000,
    reviews: 0,
    favorite: false,
  });

  // filter by name search
  React.useEffect(() => {
    const newFilteredProducts = categoryProducts.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        (selectedFilters.brands.length === 0 ||
          selectedFilters.brands.includes(product.brand)) &&
        product.currentPrice >= Number(selectedFilters.minPrice) &&
        product.currentPrice <= Number(selectedFilters.maxPrice) &&
        product.reviews >= selectedFilters.reviews &&
        (selectedFilters.favorite ? product.favorite : true)
      );
    });
    setFilteredProducts(newFilteredProducts);
  }, [searchValue, selectedFilters, categoryProducts]);

  React.useEffect(() => {
    setSelectedFilters({
      brands: [],
      minPrice: 0,
      maxPrice: 1000000,
      reviews: 0,
      favorite: false,
    });
    setSearchValue("");
    const parsedCategory = parseCategory(location.pathname.substring(1));
    const filteredCategoryProducts = productList.filter((product) => {
      return product.category === parsedCategory;
    });
    setCategoryProducts(filteredCategoryProducts);
  }, [location]);

  const handleFilterChange = (
    filterName: keyof FilterOptions,
    filterValue: any
  ) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  const handleSearchChange = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  const handleFavorite = (id: string) => {
    const newProducts = categoryProducts.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          favorite: !product.favorite,
        };
      }
      return product;
    });
    setCategoryProducts(newProducts);
  };

  return (
    <div>
      <ProductList
        filteredProducts={filteredProducts}
        handleFavorite={handleFavorite}
        handleFilterChange={handleFilterChange}
        location={location}
        selectedFilters={selectedFilters}
        handleSearchChange={handleSearchChange}
        key={location.pathname}
      />
      <ProductCarousel />
      <BestSellerProducts />
    </div>
  );
};
