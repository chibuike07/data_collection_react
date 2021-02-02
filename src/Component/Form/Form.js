import React, { useContext } from "react";
import { CollectionContext } from "../../ContextFile/useContext";
import ButtonGroup from "../Buttons/ButtonGroup";
import FormStyles from "../../Styles/Form.module.css";

const Form = () => {
  const { container, form, input } = FormStyles;
  const [data, , handleChange, , , , handleCalculate, ,] = useContext(
    CollectionContext
  );

  return (
    <div className={container}>
      <form className={form}>
        <input
          type="text"
          name="item"
          value={data.item}
          onChange={handleChange}
          required={true}
          placeholder="add item name"
          className={input}
          id="item"
        />
        <input
          type="number"
          name="num"
          value={data.num}
          onChange={handleChange}
          required={true}
          placeholder="add number of item"
          className={input}
        />
        <input
          type="number"
          name="price"
          value={data.price}
          onChange={handleChange}
          onInput={handleCalculate}
          required={true}
          className={input}
          placeholder="add item price"
        />
        <input
          type="number"
          name="totalPrice"
          value={data.totalPrice}
          required={true}
          readOnly={true}
          placeholder="total price"
          className={input}
        />
        <input
          type="text"
          name="timestamp"
          value={data.timestamp}
          required={true}
          placeholder="timestamp"
          readOnly={true}
          className={input}
        />
      </form>
      <ButtonGroup />
    </div>
  );
};

export default Form;
