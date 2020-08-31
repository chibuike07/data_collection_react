import React, { useContext } from "react";

import { CollectionContext } from "./useContext";

const Form = () => {
  const [data, , handleChange, handleFormSubmit, handleEditData] = useContext(
    CollectionContext
  );

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="item"
          value={data.item}
          onChange={handleChange}
          required={true}
        />
        <input
          type="number"
          name="num"
          value={data.num}
          onChange={handleChange}
          required={true}
        />
        <input
          type="number"
          name="price"
          value={data.price}
          onChange={handleChange}
          required={true}
        />
        <input
          type="number"
          name="totalPrice"
          value={data.totalPrice}
          onChange={handleChange}
          required={true}
        />
        <div>
          <button>add</button>
        </div>
      </form>
      <button onClick={handleEditData}>edit</button>
    </>
  );
};

export default Form;
