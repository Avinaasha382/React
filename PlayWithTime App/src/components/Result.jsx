import { useImperativeHandle,useRef } from "react"
import {createPortal} from "react-dom";

export default function Result({targetTime,ref,timeRemaining,handleChange}) {
    const dialog = useRef();

    const result = (timeRemaining <= 0 ? "lost" : "won");
    const score = (targetTime*1000 - timeRemaining)/(targetTime*1000);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    function handleSubmit()
    {
        handleChange();
    }

    return  createPortal(
        <dialog className="result-modal" ref={dialog}  onClose={handleChange}>
            <h2>You {result}</h2>
            <p>
                The Target Time was <strong>{targetTime} seconds</strong>
            </p>

            
            {result == "won" && <p>You stopped the timer with <strong>{timeRemaining/1000} seconds left </strong> .</p> }
            {result == "won" && <p>Score: <strong>{Math.round(score*100)}</strong> .</p> }

            <form method="dialog" onSubmit={handleSubmit}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    )
}