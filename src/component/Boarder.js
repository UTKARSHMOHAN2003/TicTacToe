import React, { useState } from "react";
import Square from "./Square";

function Boarder() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setXturn] = useState(true);

  const checkWinner = () => {
    const winnerlogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 3, 6],
    ];
    for (let logic of winnerlogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]){
        return state[a];
      }
     
    }
    return false;
  };

  const iswinner = checkWinner();
//NOTE - bug fixed  
  const handleClick = (index) => {
    if (state[index]!==null){
      return;
    }
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "0";
    setState(copyState);
    setXturn(!isXturn);
  };
  const handleReset=()=>{
    setState(Array(9).fill(null));
  }
  return (
    <div className="box">
      <div>
        {iswinner ? (
          <>
           <h2>{iswinner}  you won</h2>
          <button onClick={handleReset}> playagain</button>
          </>
         
        ) : (
          <>
          <h3>player {isXturn ?"x":"0"} please move</h3>
            <div className="boarder">
              <Square onClick={() => handleClick(0)} value={state[0]} />
              <Square onClick={() => handleClick(1)} value={state[1]} />
              <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="boarder">
              <Square onClick={() => handleClick(3)} value={state[3]} />
              <Square onClick={() => handleClick(4)} value={state[4]} />
              <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="boarder">
              <Square onClick={() => handleClick(6)} value={state[6]} />
              <Square onClick={() => handleClick(7)} value={state[7]} />
              <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Boarder;
