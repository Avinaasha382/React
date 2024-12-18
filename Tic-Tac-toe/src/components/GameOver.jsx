export default function GameOver({winner,restartGame}) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            <p>{winner}</p>
            <p><button onClick = {restartGame}>Rematch!</button></p>
        </div>
    )
}