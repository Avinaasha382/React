export default function Log({logInfo}) {
    return (
        <ol id="log">
            {logInfo.map((log) => {
                const player = (log.turn === 1 ? 'X' : 'O');
                const logText = `${player} selected ${log.rowIndex},${log.colIndex}`;
                return <li key={logText}>{logText}</li>
            })}
        </ol>
    )
}