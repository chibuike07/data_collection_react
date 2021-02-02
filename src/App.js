import React from "react";
import DataStatistics from "./Page/Data_statistics";

import { CollectionProvider } from "./ContextFile/useContext";

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
