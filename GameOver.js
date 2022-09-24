import React, { useContext } from "react";
import { AppContext } from "./App";

const GameOver = () => {
  const { gameOver, setGameOver, correctWord, currentAttempt } =
    useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You guessed a word"
          : "You've failed to guess a word."}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currentAttempt.attempt} attempt(s).</h3>
      )}
    </div>
  );
};

export default GameOver;
