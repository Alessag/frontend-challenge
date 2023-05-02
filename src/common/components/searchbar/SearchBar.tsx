import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

import useViewport from "../../utils/hooks/useViewport";
interface SearchBarProps {
  onSearch: (searchValue: string) => void;
  label: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, label }) => {
  const { isMediumViewport } = useViewport();
  const [searchValue, setSearchValue] = React.useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="flex text-sm box-border my-5 lg:mt-0 md:w-[563px]">
      <div className="flex items-center rounded-l-full bg-white p-3 lg:p-4 h-11">
        <FiSearch color="#7D879C" />
      </div>
      <input
        placeholder={isMediumViewport ? "Buscar" : label}
        value={searchValue}
        onChange={handleSearch}
        className="h-11 text-gray-5 w-44 md:w-96 outline-none"
      />
      <div className="border-2 bg-gray-1 flex justify-center items-center rounded-r-full w-28 md:w-48 text-center text-gray-4 h-11 cursor-pointer">
        {isMediumViewport ? "Categorías" : "Todas las categorías"}
        <AiFillCaretDown className="ml-2" />
      </div>
    </div>
  );
};
