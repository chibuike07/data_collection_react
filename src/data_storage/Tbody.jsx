import React, { useContext } from "react";
import { CollectionContext } from "./useContext";

const Tbody = () => {
  const [data, setData] = useContext(CollectionContext); //destructuring context values

  //handling the table row value
  const handleGetId = ({ index, values }) => {
    const { item, num, price, totalPrice } = values;
    setData((data) => ({
      ...data,
      item,
      num,
      price,
      totalPrice,
      keyHolder: index,
    }));
  };

  const { collection } = data; //destructuring the collection from state
  return (
    <tbody>
      {collection &&
        collection.map((values, index) => (
          <tr key={index} onClick={() => handleGetId({ index, values })}>
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
