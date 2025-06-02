import quiz_complete from "../assets/quiz-complete.png"

export default function Summary() {
    return (
        <div id="summary">
            <img src={quiz_complete} alt="Trophy Icon" />
            <h2>Quiz Complete</h2>
        </div>
    )
}