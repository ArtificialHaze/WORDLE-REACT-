import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Board from "./Board";
import Keyboard from "./Keyboard";
import { createContext } from "react";
import { boardDefault } from "./Words";
import { generateWords } from "./Words";
import GameOver from "./GameOver";

export const AppContext = createContext();

const App = () => {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  const [wordsSet, setWordsSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const [correctWord, setCorrectWord] = useState("");

  useEffect(() => {
    generateWords().then((words) => {
      setWordsSet(words.words);
      setCorrectWord(words.shouldGuessWord);
    });
  }, []);

  const onSelectLetter = (keyValue) => {
    if (currentAttempt.letterPosition > 4) return;

    const newBoard = [...board];

    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;

    setBoard(newBoard);

    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition + 1,
    });
  };

  const onDeleteLetter = () => {
    if (currentAttempt.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";

    setBoard(newBoard);

    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition - 1,
    });
  };

  const onEnterLetter = () => {
    if (currentAttempt.letterPosition !== 5) return;

    let currentWord = "";

    for (let i = 0; i < 5; i++) {
      currentWord += board[currentAttempt.attempt][i];
    }

    if (wordsSet.has(currentWord)) {
      setCurrentAttempt({
        currentAttempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } else {
      alert("Word not found.");
    }

    if (currentWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (currentAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  };

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          onSelectLetter,
          onDeleteLetter,
          onEnterLetter,
          correctWord,
          setDisabledLetters,
          disabledLetters,
          gameOver,
          setGameOver,
        }}
      >
        <div className="game">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
};

export default App;
