import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import PRODUCTS from "data/products";
import { ProductItem, Strategy, AssetClass, ProductStyle, Region } from "types";

export type FilterVal = Strategy | AssetClass | ProductStyle | Region;

export type FilterKey = "strategy" | "asset_class" | "style" | "region";

interface ProductsState {
  filters: {
    name: string;
    strategy: string[];
    asset_class: string[];
    style: string[];
    region: string[];
  };
  products: ProductItem[];
}

const initialState: ProductsState = {
  filters: {
    name: "",
    strategy: [],
    asset_class: [],
    style: [],
    region: [],
  },
  products: PRODUCTS,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByName: (state, action: PayloadAction<string>) => {
      state.filters.name = action.payload.toLowerCase();
      //filterByKey triggered by listener to enact filtering
    },
    filterByKey: (
      state,
      action: PayloadAction<{ key?: FilterKey; vals?: FilterVal[] }>
    ) => {
      const filterKey = action.payload.key;
      const filterVals = action.payload.vals;

      //update filter vals for key
      if (filterKey && filterVals) {
        state.filters[filterKey] = filterVals;
      }

      //if no filters active then return initial state
      //=> else filter the initial state using the stored filter vals
      if (
        state.filters.strategy.length === 0 &&
        state.filters.asset_class.length === 0 &&
        state.filters.style.length === 0 &&
        state.filters.region.length === 0 &&
        state.filters.name.length === 0
      ) {
        state.products = initialState.products;
      } else {
        state.products = initialState.products.filter((product) => {
          const filterByStrategy =
            state.filters.strategy.length === 0 ||
            state.filters.strategy.includes(product.strategy);

          const filterByAssetClass =
            state.filters.asset_class.length === 0 ||
            state.filters.asset_class.includes(product.asset_class);

          const filterByStyle =
            state.filters.style.length === 0 ||
            state.filters.style.includes(product.style);

          const filterByRegion =
            state.filters.region.length === 0 ||
            state.filters.region.includes(product.region);

          const filterByName =
            state.filters.name.length === 0 ||
            product.name.toLowerCase().includes(state.filters.name);

          return (
            filterByStrategy &&
            filterByAssetClass &&
            filterByStyle &&
            filterByRegion &&
            filterByName
          );
        });
      }
    },
  },
});

export const { filterByName, filterByKey } = productsSlice.actions;

export default productsSlice.reducer;
