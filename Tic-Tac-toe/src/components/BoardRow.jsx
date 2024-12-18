export default function BoardRow({data,row,updateLogInfo})
{
    return (
        <>
            <li>
                <ol>
                    {data.map((colData,colIndex) => <li key={colIndex}>  <button onClick={() => {
                        return updateLogInfo(row,colIndex)
                    }}  disabled = {colData != null} >{colData}</button></li>)}
                </ol>
            </li>
        </>
    )
}