import React from "react";
import DataStatistics from "../src/data_storage/Data_statistics.js";

import { CollectionProvider } from "../src/data_storage/useContext";

const App = () => {
  return (
    <CollectionProvider>
      <div className="container">
        <DataStatistics />
      </div>
    </CollectionProvider>
  );
};
export default App;
