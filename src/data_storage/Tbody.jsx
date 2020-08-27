import React, { useContext } from "react";
import { CollectionContext } from "./useContext";

const Tbody = () => {
  const [data] = useContext(CollectionContext);
  const { collection } = data;
  return (
    <tbody>
      <tr>
        {collection &&
          collection.map((value) =>
            Object.values(value).map((values, index) => (
              <td key={index}>{values}</td>
            ))
          )}
      </tr>
    </tbody>
  );
};

export default Tbody;
