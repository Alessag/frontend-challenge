import React from "react";
import {
  FilterOptions,
  Filters,
} from "../../common/components/filters/Filters";
import { ProductCard } from "../../common/components/productCard/ProductCard";
import { SearchBar } from "../../common/components/searchbar/SearchBar";
import { parseCategory } from "./utils/functions";
import { Product } from "./utils/types";

interface ProductListProps {
  location: { pathname: string };
  handleFavorite: (id: string) => void;
  handleFilterChange: (
    filterName: keyof FilterOptions,
    filterValue: string | boolean
  ) => void;
  selectedFilters: {
    brands: string[];
    minPrice: number;
    maxPrice: number;
    reviews: number;
    favorite: boolean;
  };
  filteredProducts: Product[];
  handleSearchChange: (searchValue: string) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  location,
  handleFavorite,
  handleFilterChange,
  selectedFilters,
  filteredProducts,
  handleSearchChange,
}) => {
  return (
    <div className="flex flex-col 2xl:justify-start lg:flex-row max-w-7xl 3xl:max-w-[1640px] mx-auto px-5">
      <Filters
        handleFilterChange={handleFilterChange}
        selectedFilters={selectedFilters}
        category={parseCategory(location.pathname.substring(1))}
      />
      <div className="flex flex-col justify-start items-start w-full">
        <SearchBar
          onSearch={(searchValue) => handleSearchChange(searchValue)}
          label="Encuentra el producto que necesitas"
        />
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 xl:gap-[51px] w-full h-[600px] lg:h-[800px] overflow-y-scroll">
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
  );
};
