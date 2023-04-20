import React from "react";
import { useLocation } from "react-router-dom";
import { Filters } from "../../common/components/filters/Filters";
import { ProductCard } from "../../common/components/productCard/ProductCard";
import { SearchBar } from "../../common/components/searchbar/SearchBar";
import { BestSellerProducts } from "./BestSellerProducts";
import { phonesList, Product, ProductCategory } from "./utils/mockedData";

const parseCategory = (category: string): ProductCategory => {
  switch (category) {
    case "club":
      return ProductCategory.CLUB;
    case "tracking":
      return ProductCategory.TRACKING;
    case "stores":
      return ProductCategory.STORE;
    case "loans":
      return ProductCategory.LOAN;
    case "motorcycle":
      return ProductCategory.MOTORCYCLE;
    case "phones":
      return ProductCategory.PHONE;
    default:
      return ProductCategory.PHONE;
  }
};

export const HomeView = () => {
  const location = useLocation();
  const [searchValue, setSearchValue] = React.useState("");
  const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([]);
  const [categoryProducts, setCategoryProducts] = React.useState<Product[]>([]);
  const [selectedFilters, setSelectedFilters] = React.useState<{
    brands: string[];
    minPrice: number;
    maxPrice: number;
    reviews: number;
  }>({
    brands: [],
    minPrice: 0,
    maxPrice: 5000,
    reviews: 0,
  });

  // filter by name search
  React.useEffect(() => {
    const filteredPhones = categoryProducts.filter((phone) => {
      return (
        phone.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        (selectedFilters.brands.length === 0 ||
          selectedFilters.brands.includes(phone.brand)) &&
        phone.currentPrice >= Number(selectedFilters.minPrice) &&
        phone.currentPrice <= Number(selectedFilters.maxPrice) &&
        phone.reviews >= selectedFilters.reviews
      );
    });
    setFilteredProducts(filteredPhones);
  }, [searchValue, selectedFilters, categoryProducts]);

  React.useEffect(() => {
    const parsedCategory = parseCategory(location.pathname.substring(1));
    const filteredCategoryProducts = phonesList.filter((phone) => {
      return phone.category === parsedCategory;
    });
    setCategoryProducts(filteredCategoryProducts);
  }, [location]);

  const handleFilterChange = (filterName: string, filterValue: any) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  return (
    <div className="border border-orange-500">
      <div className="border border-green-500 flex flex-col 2xl:justify-center lg:flex-row max-w-7xl 2xl:max-w-full mx-auto px-5 xl:px-0">
        <Filters
          handleFilterChange={handleFilterChange}
          selectedFilters={selectedFilters}
        />
        <div className="border border-black flex flex-col justify-start items-start">
          <SearchBar
            onSearch={(searchValue) => setSearchValue(searchValue)}
            label="Encuentra el producto que necesitas"
          />
          <div className="border-2 grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-4 lg:gap-[51px] h-[500px] lg:h-[800px] overflow-y-scroll">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })
            ) : (
              <p>No se encontraron resultados</p>
            )}
          </div>
        </div>
      </div>

      <div className="border-2 bg-red-300 w-full max-w-6xl mx-auto  h-96">
        CTA Banner slider
      </div>

      <BestSellerProducts />
    </div>
  );
};
