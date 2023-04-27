import React from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

import {
  FilterOptions,
  Filters,
} from "../../common/components/filters/Filters";
import { ProductCard } from "../../common/components/productCard/ProductCard";
import { SearchBar } from "../../common/components/searchbar/SearchBar";
import { BestSellerProducts } from "./BestSellerProducts";
import { parseCategory } from "./utils/functions";
import { carouselImages, productList } from "./utils/mockedData";
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

  const images = carouselImages.map((image) => {
    return (
      <img
        key={image.id}
        src={image.image}
        alt={image.alt}
        className="w-full h-96 object-cover"
      />
    );
  });

  return (
    <div>
      <div className="flex flex-col 2xl:justify-center lg:flex-row max-w-7xl 2xl:max-w-full mx-auto px-5 xl:px-0">
        <Filters
          handleFilterChange={handleFilterChange}
          selectedFilters={selectedFilters}
          category={parseCategory(location.pathname.substring(1))}
        />
        <div className="flex flex-col justify-start items-start">
          <SearchBar
            onSearch={(searchValue) => setSearchValue(searchValue)}
            label="Encuentra el producto que necesitas"
          />
          <div className="grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-4 lg:gap-[51px] h-[500px] lg:h-[800px] overflow-y-scroll">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    handleFavorite={handleFavorite}
                  />
                );
              })
            ) : (
              <p>No se encontraron resultados</p>
            )}
          </div>
        </div>
      </div>

      <div className="border-2 w-full max-w-6xl mx-auto mb-5">
        <h1 className="text-blue-3 text-lg md:text-xl lg:text-[22px] font-bold my-5 text-center">
          Ofertas y promociones
        </h1>

        <div className="w-full max-w-6xl mx-auto mb-5 px-10 xl:px-0">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            autoPlay={true}
            interval={3000}
            dynamicHeight={true}
            showStatus={false}
          >
            {images}
          </Carousel>
        </div>
      </div>

      <BestSellerProducts />
    </div>
  );
};
