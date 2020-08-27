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
//https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-reacthttps: export default App;
export default App;
