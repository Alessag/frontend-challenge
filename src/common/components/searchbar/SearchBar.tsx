import React from "react";
import { TextField } from "@mui/material";
import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  onSearch: (searchValue: string) => void;
  label: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, label }) => {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    onSearch(event.target.value);
    console.log(event.target.value);
  };

  return (
    <TextField
      label={label}
      variant="outlined"
      value={searchValue}
      onChange={handleSearch}
      fullWidth
      margin="dense"
      InputProps={{
        startAdornment: (
          <div className="mr-3">
            <FiSearch color="#7D879C" />
          </div>
        ),
      }}
      sx={{
        width: "402px",
      }}
    />
  );
};
