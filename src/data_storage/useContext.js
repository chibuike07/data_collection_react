import React, { useState, useEffect } from "react";

const CollectionContext = React.createContext([
  {},
  () => {},
  () => {},
  () => {},
  () => {},
]);

const CollectionProvider = (props) => {
  const storageData = localStorage.getItem("itemCollection");

  const [data, setData] = useState({
    item: "",
    num: "",
    price: "",
    totalPrice: "",
    keyHolder: null,
    collection: storageData ? JSON.parse(storageData) : [],
  });

  //
  const handleChange = ({ target }) => {
    setData((data) => ({ ...data, [target.name]: target.value }));
  };

  //
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { item, num, price, totalPrice } = data;
    setData((data) => ({
      ...data,
      collection: [...data.collection, { item, num, price, totalPrice }],
    }));
  };

  //
  const handleDeleteData = () => {
    const parseStorage = JSON.parse(storageData);
    const { keyHolder } = data;
    let NotRemoved = parseStorage.filter((value, i) => i !== keyHolder);
    console.log("res", NotRemoved);
    const jsonState = JSON.stringify(NotRemoved);
    localStorage.setItem("itemCollection", jsonState);
  };
  useEffect(() => {
    const handleLocalStorage = () => {
      const { collection } = data;
      try {
        const jsonState = JSON.stringify(collection);
        localStorage.setItem("itemCollection", jsonState);
      } catch (err) {
        console.error(err);
      }
    };
    handleLocalStorage();
  });

  return (
    <CollectionContext.Provider
      value={[data, setData, handleChange, handleFormSubmit, handleDeleteData]}
    >
      {props.children}
    </CollectionContext.Provider>
  );
};

export { CollectionContext, CollectionProvider };
