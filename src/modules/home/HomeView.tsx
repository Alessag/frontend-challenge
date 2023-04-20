import React from "react";
import { Filters } from "../../common/components/filters/Filters";
import { ProductCard } from "../../common/components/productCard/ProductCard";
import { SearchBar } from "../../common/components/searchbar/SearchBar";
import { BestSellerProducts } from "./BestSellerProducts";
import { phonesList } from "./utils/mockedData";

export const HomeView = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [filteredPhones, setPhonesList] = React.useState(phonesList);
  const [selectedFilters, setSelectedFilters] = React.useState({
    brands: [],
    minPrice: "0",
    maxPrice: "5,000",
    reviews: 0,
  });

  React.useEffect(() => {
    console.log(searchValue);
    const filteredPhones = phonesList.filter((phone) => {
      return phone.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setPhonesList(filteredPhones);
  }, [searchValue]);

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
            {filteredPhones.length > 0 ? (
              filteredPhones.map((phone) => {
                return <ProductCard key={phone.id} product={phone} />;
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
