import { useState , useRef} from "react"
import Result from "./Result";

export default function TimerChallenge({title,targetTime}) {
    const timer = useRef()
    const dialog = useRef()

    const [timeRemaining,setTimeRemaining] = useState(targetTime*1000);

    const timerIsActive = (timeRemaining > 0 && timeRemaining < targetTime*1000);

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining((prevTiming) => prevTiming - 10);
        },10)
        //setTimerStarted(true);
    }


    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    if(timeRemaining <= 0)
    {
        dialog.current.open();
        clearInterval(timer.current);
    }

    function handleChange() {
        setTimeRemaining(targetTime*1000);
    }

    return (
        <>
            <Result targetTime={targetTime} timeRemaining = {timeRemaining} ref = {dialog} handleChange = {handleChange} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{(targetTime > 1 ? 's' : '')}
                </p>


                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart} >{timerIsActive ? "Stop Challenge" : "Start Challenge"}</button>
                </p>
                <p>
                    Time is Running..
                </p>
            </section>
        </>
    )
}