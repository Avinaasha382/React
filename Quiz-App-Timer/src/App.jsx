import Header from "./components/Header";
import Quiz from "./components/Quiz";
import quiz_logo from "./assets/quiz-logo.png"

function App() {
    return (
        <>
            <Header header_logo={quiz_logo} header_title="REACTQUIZ" />
            <Quiz/>
        </>
    )
}

export default App;
