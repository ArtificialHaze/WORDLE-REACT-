import React, { useContext } from "react";
import { AppContext } from "./App";

const Key = ({ keyValue, bigKey, disabled }) => {
  const { onDeleteLetter, onSelectLetter, onEnterLetter } =
    useContext(AppContext);

  const selectLetter = () => {
    if (keyValue === "ENTER") {
      onEnterLetter();
    } else if (keyValue === "DELETE") {
      onDeleteLetter();
    } else {
      onSelectLetter(keyValue);
    }
  };

  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyValue}
    </div>
  );
};

export default Key;
