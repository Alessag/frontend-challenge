import { Checkbox, FormControlLabel, Rating, TextField } from "@mui/material";

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

export const Filters = () => {
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
              return <FormControlLabel control={<Checkbox />} label={brand} />;
            })}
          </div>
        </div>

        <div className="border-b-2 border-gray-2 py-5 px-6">
          <h1 className="text-blue-4 font-bold">Precio</h1>
          <div className="flex items-center text-gray-3">
            <TextField
              id="outlined-basic"
              label="100"
              variant="outlined"
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
            value={2}
            onChange={(event, newValue) => {
              console.log(newValue);
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
