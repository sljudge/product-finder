import React from "react";
import { Provider } from "react-redux";

import { store } from "config/store";
import ProductTable from "pages/ProductTable";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ProductTable />
    </Provider>
  );
};

export default App;
