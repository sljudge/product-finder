import React, { PropsWithChildren } from "react";

const H1: React.FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="text-2xl text-blue-200">{children}</h1>;
};

export default H1;
