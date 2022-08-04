import React from "react";
import "../styles/EndScreen.css";

const EndScreen = ({ gameScore, questionCount, allQuestionWithAnswer }) => {
  return (
    <div className="end-screen-container">
      <div className="quiz-result">
        Result: {gameScore} / {questionCount}
      </div>
      {allQuestionWithAnswer?.map((list, i) => (
        <div key={i} className="question-list-with-answer">
          <div
            className={
              list.isAnswerCorrect
                ? "question-list"
                : "question-list wrong-answer-question-list"
            }
          >
            Q: {list.question}
          </div>
          <div className="answer-list">A: {list.correctAnswer}</div>
        </div>
      ))}
    </div>
  );
};

export default EndScreen;
