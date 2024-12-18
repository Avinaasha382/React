import {useState} from "react";



export default function Player({initialName,symbol,isActive}) {
    const [name,setName] = useState(initialName);
    const [edit,setEdit] = useState(false);

    let buttonContent = "Edit";

    if(edit)
    {
        buttonContent = "Save";
    }

    function handleClick()
    {
        setEdit((editing) => !editing);
        console.log(title);
    }

    function handleChange(e) {
        setName((currName) => e.target.value)
    }

    return (
        <>
            <li className= {isActive ? "active" : undefined}>
            <span className="player">
              {!edit ? <span className="player-name">{name}</span> : null}
              {edit ? <input type = "text" name="playerTitle"  onChange={handleChange} value={name}/> : null}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{buttonContent}</button>
          </li>
        </>
    )
}