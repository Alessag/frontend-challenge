import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Modal,
  Rating,
  TextField,
} from "@mui/material";
import { ProductCategory } from "../../../modules/home/utils/enums";
import { brands } from "../../../modules/home/utils/mockedData";
import { SortByFilter } from "./SortByFilter";
import useViewport from "../../utils/hooks/useViewport";
import useBoolean from "../../utils/hooks/useBoolean";
import { GrClose } from "react-icons/gr";
export interface FilterOptions {
  brands: string[];
  minPrice: number;
  maxPrice: number;
  reviews: number;
  favorite: boolean;
}

interface FiltersProps {
  handleFilterChange: (
    filterName: keyof FilterOptions,
    filterValue: any
  ) => void;
  selectedFilters: FilterOptions;
  category: ProductCategory;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "90vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
  display: "flex",
  flexDirection: "column",
};

export const Filters: React.FC<FiltersProps> = ({
  handleFilterChange,
  selectedFilters,
  category,
}) => {
  const viewport = useViewport();
  const isSmallViewport =
    viewport === "sm" || viewport === "md" || viewport === "lg";
  const {
    value: showModal,
    setTrue: openModal,
    setFalse: closeModal,
  } = useBoolean(false);

  const body = (
    <div className="bg-white shadow-secondary lg:w-[351px]">
      <div className="border-b-2 border-gray-2 px-6 pt-5">
        <h1 className="text-blue-4 font-bold mb-1">Marcas</h1>
        <div className="flex flex-col lg:w-72 h-48 pl-3 text-base overflow-y-scroll">
          {brands[category].map((brand) => {
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
      <div className="text-blue-4 font-bold border-b-2 border-gray-2 py-5 px-6">
        <h1 className="mb-2">Favorito</h1>
        <Checkbox
          checked={selectedFilters.favorite}
          onChange={(event) => {
            handleFilterChange("favorite", event.target.checked);
          }}
        />
      </div>
      <div className="text-blue-4 font-bold py-5 px-6">Cámara</div>
    </div>
  );

  return (
    <div className="mr-11">
      <SortByFilter />
      {isSmallViewport ? (
        <>
          <Button onClick={openModal}>Filtros</Button>
          <Modal
            open={showModal}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div
                onClick={closeModal}
                className="flex justify-end text-lg mb-4"
              >
                <GrClose />
              </div>
              {body}
            </Box>
          </Modal>
        </>
      ) : (
        body
      )}
    </div>
  );
};
