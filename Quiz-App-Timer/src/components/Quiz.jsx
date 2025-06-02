import { useState,useEffect,useRef} from "react"
import questions from "../questions.js"
import Question from "./Question.jsx";
import Answers from "./Answers.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    const [userAnswers,setUserAnswers] = useState([]);
    const [timer,setTimer] = useState(10000);
    const selectedQuestionNumber = userAnswers.length;
    const selectedQuestion = questions[selectedQuestionNumber];
    const answeredRef = useRef(false);

    

    useEffect(() => {
        if (selectedQuestionNumber >= questions.length) return;

        answeredRef.current = false;
    
        const interval = setInterval(() => {
          setTimer((prevTime) => {
            if (prevTime <= 10) {
              clearInterval(interval);
              handleTimeout();
              return 0;
            }
            return prevTime - 10;
          });
        }, 10);
    
        return () => clearInterval(interval);
      }, [selectedQuestionNumber]);

    function handleSelectAnswer(answer){
        setUserAnswers(prevAnswers => [...prevAnswers,answer]);
        setTimer(10000)
    }

    function handleTimeout() {
        setUserAnswers(prevAnswers => [...prevAnswers,"Timeout"]);
        setTimer(10000);
    }

    return (selectedQuestionNumber < questions.length) ?(
        <div id="quiz">
            <Question question={selectedQuestion.text} remainingTime={timer}/>
            <Answers answers={selectedQuestion.answers} 
            handleSelectAnswer = {handleSelectAnswer}
            correctAnswer = {selectedQuestion.answers[0]} />
        </div>
    ) : <Summary />
}