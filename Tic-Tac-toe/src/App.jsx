import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combinations";

//we lift the state up(turn) as it is needed by both the Player and the GameBoard Component

const currentBoardData = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

let isWinner = false;



  //console.log("No winner..");




function App() {
  const [logInfo,setLogInfo] = useState([]);

  function updateLogInfo(row,col)
  {
    let currentPlayer = 1;
    if(logInfo.length > 0 && logInfo[0].turn == 1)
    {
      currentPlayer = 2;
    }

    const updatedLogInfo = [{rowIndex:row,colIndex:col,turn:currentPlayer},...logInfo];
    setLogInfo(updatedLogInfo);
   
  }

  function restartGame()
  {
    //alternatively create a deep copy of currentBoardData so as to not change it in the GameOver file
    for(let i = 0; i < currentBoardData.length;i++) 
    {
      currentBoardData[i] = [null,null,null];
    }
    setLogInfo([]);
  }

  let turn = 1;
  if(logInfo.length > 0 && logInfo[0].turn == 1)
    {
      turn = 2;
    }
  
    for(let log of logInfo)
    {
        const{turn,rowIndex,colIndex} = log;
        if(turn == 1)
        currentBoardData[rowIndex][colIndex] = 'X';
        else
        currentBoardData[rowIndex][colIndex] = 'O';

    }

let hasGameEnded = false;

for(let combination of WINNING_COMBINATIONS) {
    const r1 = combination[0].row;
    const c1 = combination[0].column;
    const r2 = combination[1].row;
    const c2 = combination[1].column;
    const r3 = combination[2].row;
    const c3 = combination[2].column;

    if(currentBoardData[r1][c1] === 'X' && currentBoardData[r2][c2] === 'X' && currentBoardData[r3][c3] === 'X')
    {
        hasGameEnded = true;
    }

    if(currentBoardData[r1][c1] === 'O' && currentBoardData[r2][c2] === 'O' && currentBoardData[r3][c3] === 'O')
    {
      hasGameEnded = true;
    }
  }

  let winner = 'X';
  if(logInfo.length > 0 && logInfo[0].turn == 2)
  {
    winner = 'O';
  }

  let gameDraw = true;
                    //Alternatively use gameDraw = (logInfo.length === 9 && !hasGameEnded)
  if(!hasGameEnded) // that is 9 turns have happened and no winner as of now.
  {
      for(let i = 0; i < 3; i++)
      {
        for(let j = 0; j < 3; j++)
        {
          if(currentBoardData[i][j] == null)
          {
            gameDraw = false;
            break;
          }
        }
      }
  }

if(!hasGameEnded && gameDraw)
{
  winner = "DRAW";
}

  
  return (
    <main>
      <div id = "game-container">
        <ul id = "players" className="highlight-player">
          <Player initialName = "Player-1" symbol = "X" isActive = {turn == 1 ? true : false} />
          <Player initialName = "Player-2" symbol = "O" isActive = {turn == 2 ? true : false}/>
        </ul>
      <GameBoard  updateLogInfo = {updateLogInfo} logInfo = {logInfo} currentBoardData = {currentBoardData}/>
      {(hasGameEnded||gameDraw) && <GameOver winner = {winner} restartGame = {restartGame} />}
      </div>

      <Log  logInfo = {logInfo} />
    </main>
  )
}

export default App
