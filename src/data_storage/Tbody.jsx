import React, { useContext } from "react";
import { CollectionContext } from "./useContext";

const Tbody = () => {
  const handleGetId = ({ index = 1 }) => {
    console.log("object", index);
  };
  const [data] = useContext(CollectionContext);
  const { collection } = data;
  return (
    <tbody>
      {collection &&
        collection.map((values, index) => (
          <tr key={index} onClick={() => handleGetId({ index })}>
            <td>{values.item}</td>
            <td>{values.num}</td>
            <td>{values.price}</td>
            <td>{values.totalPrice}</td>
          </tr>
        ))}
    </tbody>
  );
};

export default Tbody;
