import React from "react";

import { ReactComponent as SearchIcon } from "assets/images/search.svg";

interface Props {
  placeholder: string;
  value: string;
  onChange(val: string): void;
}

const SearchInput: React.FC<Props> = ({ placeholder, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <div className="border-b-2 border-blue-200 pb-2 flex items-center">
      <SearchIcon width={20} height={20} />
      <label className="flex-1 flex items-end">
        <span className="ml-2 mr-8 text-xl text-blue-200">SEARCH</span>
        <input
          className="placeholder:italic bg-transparent outline-none flex-1 text-sm"
          placeholder={placeholder}
          value={value}
          type="search"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchInput;
