import React from "react";
import { Provider } from "react-redux";

import { store } from "config/store";
import Test from "pages/Test";

const App: React.FC = () => {
  return (
    // <Provider store={store}>
    <Test />
    // </Provider>
  );
};

export default App;
