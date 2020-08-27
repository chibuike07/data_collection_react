import React, { useState } from "react";

const CollectionContext = React.createContext([
  {},
  () => {},
  () => {},
  () => {},
]);

const CollectionProvider = (props) => {
  const [data, setData] = useState({
    item: "",
    num: "",
    price: "",
    totalPrice: "",
    collection: [],
  });
  const handleChange = ({ target }) => {
    setData((data) => ({ ...data, [target.name]: target.value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { item, num, price, totalPrice } = data;
    setData((data) => ({
      ...data,
      collection: [...data.collection, { item, num, price, totalPrice }],
    }));
  };

  return (
    <CollectionContext.Provider
      value={[data, setData, handleChange, handleFormSubmit]}
    >
      {props.children}
    </CollectionContext.Provider>
  );
};

export { CollectionContext, CollectionProvider };
