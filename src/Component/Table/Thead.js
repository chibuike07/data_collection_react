import React, { useContext } from "react";
import { CollectionContext } from "../../ContextFile/useContext";
import TheadStyles from "../../Styles/TableHead.module.css";

const Thead = () => {
  const { thead, row, col } = TheadStyles;
  const [data] = useContext(CollectionContext);
  const { collection } = data;
  const headingArr = ["item", "number", "price", "total price", "time stamp"];
  return (
    <thead className={thead}>
      <tr className={row}>
        {collection &&
          headingArr.map((keys, index) => (
            <th key={index} className={col}>
              {keys}
            </th>
          ))}
      </tr>
    </thead>
  );
};

export default Thead;
