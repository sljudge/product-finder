import React from "react";

import {
  filterByName,
  filterByKey,
  FilterKey,
  FilterVal,
} from "config/productsSlice";
import ProductTableView from "views/ProductTable";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";

const ProductTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const productsState = useAppSelector((state) => state.productsSlice);

  const handleFilterByKey = (key: FilterKey, values: FilterVal[]) =>
    dispatch(filterByKey({ key: key, vals: values }));

  const handleFilterByName = (val: string) => dispatch(filterByName(val));

  return (
    <ProductTableView
      productItems={productsState.products}
      onFilterByKey={handleFilterByKey}
      onFilterByName={handleFilterByName}
    />
  );
};

export default ProductTable;
