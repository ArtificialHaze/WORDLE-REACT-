import wordsBank from "./wordle-bank.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWords = async () => {
  let words;
  let shouldGuessWord;
  await fetch(wordsBank)
    .then((res) => res.text())
    .then((result) => {
      const wordsArray = result.split("\n");
      shouldGuessWord =
        wordsArray[Math.floor(Math.random() * wordsArray.length)];
      words = new Set(wordsArray);
    });
  return { words, shouldGuessWord };
};
