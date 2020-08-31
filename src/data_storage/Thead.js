import React, { useContext } from "react";
import { CollectionContext } from "./useContext";

const Thead = () => {
  const [data] = useContext(CollectionContext);
  const { collection } = data;
  const headingArr = ["Item", "Num", "Price", "Total Price"];
  return (
    <thead>
      <tr>
        {collection &&
          headingArr.map((keys, index) => <th key={index}>{keys}</th>)}
      </tr>
    </thead>
  );
};

export default Thead;
