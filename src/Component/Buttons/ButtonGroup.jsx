import React, { useContext } from "react";
import { CollectionContext } from "../../ContextFile/useContext";
import ButtonStyles from "../../Styles/Button.module.css";

const ButtonGroup = () => {
  const { container, buton } = ButtonStyles;
  const [
    ,
    ,
    ,
    handleFormSubmit,
    handleDeleteData,
    handleEditData,
    ,
    handleCache,
  ] = useContext(CollectionContext);
  return (
    <div className={container}>
      <button className={buton} onClick={handleFormSubmit}>
        add
      </button>
      <button className={buton} onClick={handleEditData}>
        edit
      </button>
      <button className={buton} onClick={handleDeleteData}>
        del
      </button>
      <button className={buton} onClick={handleCache}>
        clear
      </button>
    </div>
  );
};

export default ButtonGroup;
