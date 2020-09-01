import React, { useState, useEffect } from "react";

const CollectionContext = React.createContext([
  {},
  () => {},
  () => {},
  () => {},
  () => {},
  () => {},
]);

const CollectionProvider = (props) => {
  //getting and setting the localstorage data to the state on load
  const storageData = localStorage.getItem("itemCollection");

  //declaring of state values
  const [data, setData] = useState({
    item: "",
    num: "",
    price: "",
    totalPrice: "",
    keyHolder: null,
    collection: storageData ? JSON.parse(storageData) : [],
  });

  //handling the formfield changes
  const handleChange = ({ target }) => {
    setData((data) => ({ ...data, [target.name]: target.value }));
  };

  //setting input values to the state
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { item, num, price, totalPrice } = data;
    setData((data) => ({
      ...data,
      collection: [...data.collection, { item, num, price, totalPrice }],
    }));
  };

  //handling data edition from the localstorage
  const handleEditData = () => {
    const parseStorage = JSON.parse(storageData);
    const { keyHolder, item, num, price, totalPrice } = data;
    let matchIndex = parseStorage.findIndex((value, i) => i === keyHolder);
    parseStorage.splice(matchIndex, 1, {
      item,
      num,
      price,
      totalPrice,
    });
    const jsonState = JSON.stringify(parseStorage);
    localStorage.setItem("itemCollection", jsonState);
  };

  //handle deletion of data from the local storage
  const handleDeleteData = () => {
    const parseStorage = JSON.parse(storageData);
    const { keyHolder } = data;
    let NotRemoved = parseStorage.filter((value, i) => i !== keyHolder);
    const jsonState = JSON.stringify(NotRemoved);
    localStorage.setItem("itemCollection", jsonState);
  };

  useEffect(() => {
    //setting state form field data to local storage
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
      //assign the provider values
      value={[
        data,
        setData,
        handleChange,
        handleFormSubmit,
        handleDeleteData,
        handleEditData,
      ]}
    >
      {props.children}
    </CollectionContext.Provider>
  );
};

export { CollectionContext, CollectionProvider };
