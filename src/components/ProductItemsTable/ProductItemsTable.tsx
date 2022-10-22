import React, { PropsWithChildren } from "react";
import cx from "classnames";

import { ProductItem } from "types";

const TH: React.FC<PropsWithChildren & { primary?: boolean }> = ({
  children,
  primary,
}) => (
  <th
    className={cx(
      {
        "bg-blue-100": primary,
        "bg-blue-400": !primary,
      },
      "px-4 text-sm text-left text-white font-normal"
    )}
  >
    {children}
  </th>
);

const TD: React.FC<
  PropsWithChildren & { primary?: boolean; withSeparator?: boolean }
> = ({ children, primary, withSeparator }) => (
  <th
    className={cx(
      {
        "text-blue-200": primary,
        "border-r": withSeparator,
      },
      "px-4 py-2 text-sm text-left font-normal border-b border-gray-100"
    )}
  >
    {children}
  </th>
);

interface Props {
  productItems: ProductItem[];
}

const ProductItemsTable: React.FC<Props> = ({ productItems }) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="h-12">
          <TH primary>Fund Name</TH>
          <TH primary>Primary Ticker</TH>
          <TH primary>Income Treatment</TH>
          <TH primary>Share Class Currency</TH>
          <TH>ISIN</TH>
          <TH>Strategy</TH>
          <TH>Asset Class</TH>
          <TH>Region</TH>
          <TH>Style</TH>
        </tr>
      </thead>
      <tbody>
        {productItems.map((product) => (
          <tr key={product.name}>
            <TD primary>{product.name}</TD>
            <TD>{product.primary_ticker}</TD>
            <TD>{product.income_treatment}</TD>
            <TD withSeparator>{product.share_class_currency}</TD>
            <TD>{product.isin}</TD>
            <TD>{product.strategy}</TD>
            <TD>{product.asset_class}</TD>
            <TD>{product.region}</TD>
            <TD>{product.style}</TD>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductItemsTable;
