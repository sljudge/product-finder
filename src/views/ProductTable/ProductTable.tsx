import React from "react";

import { FilterKey, FilterVal } from "config/productsSlice";
import Footer from "components/Footer";
import ProductSearch from "components/ProductSearch";
import ProductItemsTable from "components/ProductItemsTable";
import TopBar from "components/TopBar";
import { ProductItem } from "types";

interface Props {
  productItems: ProductItem[];
  onFilterByKey(key: FilterKey, vals: FilterVal[]): void;
  onFilterByName(val: string): void;
}

const ProductTable: React.FC<Props> = ({
  productItems,
  onFilterByKey,
  onFilterByName,
}) => {
  return (
    <main>
      <TopBar />
      <ProductSearch
        onFilterByKey={onFilterByKey}
        onFilterByName={onFilterByName}
      />
      <div className="bg-white px-page py-8">
        <ProductItemsTable productItems={productItems} />
      </div>
      <Footer />
    </main>
  );
};

export default ProductTable;
