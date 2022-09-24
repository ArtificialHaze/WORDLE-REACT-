import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";

const Letter = ({ position, attemptValue }) => {
  const { board, correctWord, currentAttempt, setDisabledLetters } =
    useContext(AppContext);

  const letter = board[attemptValue][position];

  const correct = correctWord.toUpperCase()[position] === letter;

  const notCorrectButClose =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  const letterState =
    currentAttempt.attempt > attemptValue &&
    (correct ? "correct" : notCorrectButClose ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !notCorrectButClose) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currentAttempt.attempt]);

  return (
    <div id={letterState} className="letter">
      {letter}
    </div>
  );
};

export default Letter;
