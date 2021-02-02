import React from "react";
import Table from "../Component/Table/Table";
import Form from "../Component/Form/Form";
import Data_statisticsStyles from "../Styles/Data_statistics.module.css";

const Data_statistics = () => {
  const { container, wrapper, heading, content } = Data_statisticsStyles;
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={heading}>
          <h2>take note of your items and expenses with ease!!!</h2>
        </div>
        <div className={content}>
          <Form />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Data_statistics;
