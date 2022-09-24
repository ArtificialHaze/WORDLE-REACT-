import React from "react";
import Letter from "./Letter";

const Board = () => {
  return (
    <div className="board">
      <div className="row">
        <Letter position={0} attemptValue={0} />
        <Letter position={1} attemptValue={0} />
        <Letter position={2} attemptValue={0} />
        <Letter position={3} attemptValue={0} />
        <Letter position={4} attemptValue={0} />
      </div>
      <div className="row">
        <Letter position={0} attemptValue={1} />
        <Letter position={1} attemptValue={1} />
        <Letter position={2} attemptValue={1} />
        <Letter position={3} attemptValue={1} />
        <Letter position={4} attemptValue={1} />
      </div>
      <div className="row">
        <Letter position={0} attemptValue={2} />
        <Letter position={1} attemptValue={2} />
        <Letter position={2} attemptValue={2} />
        <Letter position={3} attemptValue={2} />
        <Letter position={4} attemptValue={2} />
      </div>
      <div className="row">
        <Letter position={0} attemptValue={3} />
        <Letter position={1} attemptValue={3} />
        <Letter position={2} attemptValue={3} />
        <Letter position={3} attemptValue={3} />
        <Letter position={4} attemptValue={3} />
      </div>
      <div className="row">
        <Letter position={0} attemptValue={4} />
        <Letter position={1} attemptValue={4} />
        <Letter position={2} attemptValue={4} />
        <Letter position={3} attemptValue={4} />
        <Letter position={4} attemptValue={4} />
      </div>
      <div className="row">
        <Letter position={0} attemptValue={5} />
        <Letter position={1} attemptValue={5} />
        <Letter position={2} attemptValue={5} />
        <Letter position={3} attemptValue={5} />
        <Letter position={4} attemptValue={5} />
      </div>
    </div>
  );
};

export default Board;
