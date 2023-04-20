import React from "react";
import { Checkbox, FormControlLabel, Rating, TextField } from "@mui/material";

interface FiltersProps {
  handleFilterChange: (filterName: string, filterValue: any) => void;
  selectedFilters: {
    brands: string[];
    minPrice: number;
    maxPrice: number;
    reviews: number;
  };
}

const listOfBrands = [
  "Apple",
  "Samsung",
  "Huawei",
  "Xiaomi",
  "OPPp",
  "Sony",
  "LG",
  "Motorola",
  "Nokia",
];

export const Filters: React.FC<FiltersProps> = ({
  handleFilterChange,
  selectedFilters,
}) => {
  return (
    <div className="mr-11">
      <div className="border-2 border-gray-1 flex mb-5">
        <div className="border-r-2 border-gray-1 text-gray-1 px-3 py-2">
          Ordenar por
        </div>
        <div className="font-semibold text-blue-3 px-3 py-2">
          Mejores reviews
        </div>
      </div>

      <div className="bg-white shadow-secondary lg:w-[351px]">
        <div className="border-b-2 border-gray-2 px-6 pt-5">
          <h1 className="text-blue-4 font-bold mb-1">Marcas</h1>
          <div className="flex flex-col lg:w-72 h-48 pl-3 text-base overflow-y-scroll">
            {listOfBrands.map((brand) => {
              return (
                <FormControlLabel
                  key={brand}
                  control={
                    <Checkbox
                      checked={selectedFilters.brands.includes(brand)}
                      onChange={(event) => {
                        console.log("Brand", event);
                        handleFilterChange(
                          "brands",
                          event.target.checked
                            ? [...selectedFilters.brands, brand]
                            : selectedFilters.brands.filter((b) => b !== brand)
                        );
                      }}
                    />
                  }
                  label={brand}
                />
              );
            })}
          </div>
        </div>

        <div className="border-b-2 border-gray-2 py-5 px-6">
          <h1 className="text-blue-4 font-bold mb-3">Precio</h1>
          <div className="flex items-center text-gray-3">
            <TextField
              id="outlined-basic"
              label="100"
              variant="outlined"
              value={selectedFilters.minPrice}
              onChange={(event) => {
                handleFilterChange("minPrice", event.target.value);
              }}
              sx={{
                width: "120px",
                height: "44px",
                marginRight: "6px",
              }}
            />{" "}
            -
            <TextField
              id="outlined-basic"
              label="5,000"
              variant="outlined"
              value={selectedFilters.maxPrice}
              onChange={(event) => {
                handleFilterChange("maxPrice", event.target.value);
              }}
              sx={{
                width: "120px",
                height: "44px",
                marginLeft: "6px",
              }}
            />
          </div>
        </div>
        <div className="text-blue-4 font-bold border-b-2 border-gray-2 py-5 px-6">
          <h1 className="mb-2">Reviews</h1>
          <Rating
            name="simple-controlled"
            value={selectedFilters.reviews}
            onChange={(event, newValue) => {
              console.log(newValue);
              handleFilterChange("reviews", newValue);
            }}
          />
        </div>
        <div className="text-blue-4 font-bold border-b-2 border-gray-2 py-5 px-6">
          Memoria
        </div>
        <div className="text-blue-4 font-bold border-b-2 border-gray-2 py-5 px-6">
          Rango
        </div>
        <div className="text-blue-4 font-bold py-5 px-6">Cámara</div>
      </div>
    </div>
  );
};
