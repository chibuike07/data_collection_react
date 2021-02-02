import React from "react";
import Thead from "./Thead";
import Tbody from "./Tbody";
import TableStyles from "../../Styles/Table.module.css";

const Table = () => {
  const { table } = TableStyles;
  return (
    <table className={table}>
      <Thead />
      <Tbody />
    </table>
  );
};

export default Table;
