import React, { useContext } from "react";
import { CollectionContext } from "./useContext";

const Thead = () => {
  const [data] = useContext(CollectionContext);
  const { collection } = data;

  return (
    <thead>
      <tr>
        {collection &&
          collection.map((value) =>
            Object.keys(value).map((keys, index) => <th key={index}>{keys}</th>)
          )}
      </tr>
    </thead>
  );
};

export default Thead;
