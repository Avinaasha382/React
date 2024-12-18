import BoardRow from "./BoardRow"

export default function GameBoard({updateLogInfo,currentBoardData}) {
    let gameBoard = currentBoardData;

    return (
        <ol id = "game-board">
            {gameBoard.map((rowData,rowIndex) => <BoardRow  key={rowIndex} data = {rowData} 
            row = {rowIndex} updateLogInfo = {updateLogInfo}  />)}
        </ol>
    )
}
