export default function Question({question,remainingTime}) {
      
    return (
        <div id="question">
            <progress value={remainingTime} max={10000} id="question-time"></progress>
            <h2>{question}</h2>
        </div>
    )
}