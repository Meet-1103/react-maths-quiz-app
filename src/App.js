import QuizContainer from "./components/QuizContainer";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <div className="quiz-one">
        <QuizContainer quizName="Quiz One" />
      </div>
      <div className="quiz-two">
        <QuizContainer quizName="Quiz Two" />
      </div>
    </div>
  );
}

export default App;
