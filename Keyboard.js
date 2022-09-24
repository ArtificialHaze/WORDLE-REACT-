import React, { useCallback, useContext, useEffect } from "react";
import { AppContext } from "./App";
import Key from "./Key";

const Keyboard = () => {
  const { onDeleteLetter, onEnterLetter, onSelectLetter, disabledLetters } =
    useContext(AppContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback((e) => {
    if (e.key === "Enter") {
      onEnterLetter();
    } else if (e.key === "Backspace") {
      onDeleteLetter();
    } else {
      keys1.forEach((key) => {
        if (e.key.toLowerCase() === key.toLocaleLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys2.forEach((key) => {
        if (e.key.toLowerCase() === key.toLocaleLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys3.forEach((key) => {
        if (e.key.toLowerCase() === key.toLocaleLowerCase()) {
          onSelectLetter(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key) => {
          return (
            <Key
              key={key}
              keyValue={key}
              disabled={disabledLetters.includes(key)}
            />
          );
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return (
            <Key
              key={key}
              keyValue={key}
              disabled={disabledLetters.includes(key)}
            />
          );
        })}
      </div>
      <div className="line3">
        <Key keyValue={"ENTER"} bigKey={true} />
        {keys3.map((key) => {
          return (
            <Key
              key={key}
              keyValue={key}
              disabled={disabledLetters.includes(key)}
            />
          );
        })}
        <Key keyValue={"DELETE"} bigKey={true} />
      </div>
    </div>
  );
};

export default Keyboard;
