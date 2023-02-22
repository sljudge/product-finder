import React, { useState, useEffect } from "react";

import { FilterKey, FilterVal } from "config/productsSlice";
import H1 from "components/H1";
import SearchInput from "components/SearchInput";
import SelectFilter from "components/SelectFilter";
import {
  STRATEGIES,
  REGIONS,
  MARKETS,
  EQUITIES,
  FIXED_INCOMES,
  PRODUCT_STYLES,
} from "types";

interface Props {
  onFilterByKey(key: FilterKey, vals: FilterVal[]): void;
  onFilterByName(val: string): void;
}

const ProductSearch: React.FC<Props> = ({ onFilterByKey, onFilterByName }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (val: string) => {
    setSearchValue(val);
    onFilterByName(val);
  };

  const handleStrategyFilterChange = (vals: FilterVal[]) => {
    onFilterByKey("strategy", vals);
  };

  const handleAssetsFilterChange = (vals: FilterVal[]) => {
    onFilterByKey("asset_class", vals);
  };

  const handleRegionFilterChange = (vals: FilterVal[]) => {
    onFilterByKey("region", vals);
  };

  const handleStyleFilterChange = (vals: FilterVal[]) => {
    onFilterByKey("style", vals);
  };

  return (
    <div className="px-page flex py-8 bg-gray-50">
      <div>
        <H1>Product Finder</H1>
        <div className="my-8 pr-4">
          <SearchInput
            placeholder="Enter fund name"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
        <div className="flex">
          <SelectFilter
            title="Strategy"
            options={[...STRATEGIES]}
            onChange={handleStrategyFilterChange}
          />
          <SelectFilter
            title="Asset Class"
            options={[
              { title: "Equity", options: [...EQUITIES] },
              { title: "Fixed Income", options: [...FIXED_INCOMES] },
            ]}
            onChange={handleAssetsFilterChange}
          />
          <SelectFilter
            title="Market & Region"
            options={[
              { title: "Market", options: [...MARKETS] },
              { title: "Region", options: REGIONS },
            ]}
            onChange={handleRegionFilterChange}
          />
          <SelectFilter
            title="Style"
            options={[...PRODUCT_STYLES]}
            onChange={handleStyleFilterChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
