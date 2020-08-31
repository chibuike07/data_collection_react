import React, { useContext } from "react";
import { CollectionContext } from "./useContext";

const Tbody = () => {
  const [data, setData] = useContext(CollectionContext);
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

    // handleEditData({ index, values });
  };
  const { collection } = data;
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
