import { useMemo, useState, useRef} from "react";
import questions from "../questions";

function shuffleArray(original) {
    const shuffled = [...original]; 
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; 
    }
    return shuffled;
  }

export default function Answers({answers,handleSelectAnswer,correctAnswer}) {
    const shuffledAnswers = useMemo(() => shuffleArray(answers), [answers]);
    const [answerState,setAnswerState] = useState("");
    let selectedAnswer = useRef("");

    function handleAnswerClick(answer) {
        selectedAnswer.current = answer;
        setAnswerState("answered");
        setTimeout(() => {
            if(correctAnswer === answer)
            {
                setAnswerState("correct");
            }
            else
            {
                setAnswerState("wrong");
            }
            setTimeout(() => {
                handleSelectAnswer(answer);
            },1000)
        },1000)

    }

    let answerClass = "";
    if(answerState == "answered")
    {
        answerClass = "selected";
    }
    else if(answerState == "correct" || answerState == "wrong")
    {
        answerClass = answerState;
    }
    return (
        <ul id="answers">
            {shuffledAnswers.map((answer) => <li className="answer" key={answer}>
                <button onClick={() => handleAnswerClick(answer)} 
                className={answer === selectedAnswer.current ? answerClass : ""}>{answer}</button>
            </li>)
            }

        </ul>
    )
}