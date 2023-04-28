import React from "react";
import { TextField } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import useViewport from "../../utils/hooks/useViewport";
import { AiFillCaretDown } from "react-icons/ai";

interface SearchBarProps {
  onSearch: (searchValue: string) => void;
  label: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, label }) => {
  const viewport = useViewport();
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="border-2 border-black flex text-sm box-border my-5">
      <div className="flex items-center rounded-l-2xl bg-white p-3 lg:p-4 h-11">
        <FiSearch color="#7D879C" />
      </div>
      <input
        placeholder={viewport === "sm" || viewport === "md" ? "Buscar" : label}
        value={searchValue}
        onChange={handleSearch}
        className="h-11 text-gray-5 w-44 outline-none"
      />
      <div className="border-2 bg-gray-1 flex justify-center items-center rounded-r-2xl w-28 lg:w-48 text-center text-gray-4 h-11">
        {viewport === "sm" || viewport === "md"
          ? "Categorías"
          : "Todas las categorías"}
        <AiFillCaretDown className="ml-2" />
      </div>
    </div>
  );
};
