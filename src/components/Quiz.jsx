import React, { useState, useRef, useEffect } from "react";
import "../styles/Quiz.css";

const Quiz = ({
  questions,
  gameScore,
  changeGameScore,
  changeGameStage,
  questionWithAnswerFunction,
}) => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const inputElement = useRef();

  useEffect(() => {
    inputElement.current.focus();
  }, [currentQuestionNumber]);

  let currentQuestion = questions[currentQuestionNumber].question;
  let correctAnswer = questions[currentQuestionNumber].answer;
  let questionCount = questions.length;

  const onInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const nextQuestion = (e) => {
    e.preventDefault();
    setUserAnswer("");
    setCurrentQuestionNumber(
      (currentQuestionNumber) => currentQuestionNumber + 1
    );
    if (correctAnswer == userAnswer) {
      changeGameScore(1);
      questionWithAnswerFunction(currentQuestion, correctAnswer, true);
      return;
    }

    questionWithAnswerFunction(currentQuestion, correctAnswer, false);
  };

  const finishQuiz = (e) => {
    e.preventDefault();
    changeGameStage("finish");
    if (correctAnswer == userAnswer) {
      changeGameScore(1);
      questionWithAnswerFunction(currentQuestion, correctAnswer, true);
      return;
    }

    questionWithAnswerFunction(currentQuestion, correctAnswer, false);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-question">{currentQuestion}</div>
      <form
        onSubmit={
          currentQuestionNumber + 1 === questionCount
            ? finishQuiz
            : nextQuestion
        }
        className="quiz-form"
      >
        <input
          type="number"
          ref={inputElement}
          value={userAnswer}
          onChange={onInputChange}
          className="user-input"
          placeholder="Enter your answer ..."
          autoComplete="off"
          required
        />
        <div className="change-question-button">
          {currentQuestionNumber + 1 === questionCount ? (
            <button className="finish-quiz-button">Finish</button>
          ) : (
            <button className="next-question-button">Next</button>
          )}
        </div>
      </form>
      <div className="quiz-footer">
        <div>{`Score: ${gameScore}`}</div>
        <div>{`Question: ${currentQuestionNumber + 1} / ${questionCount}`}</div>
      </div>
    </div>
  );
};

export default Quiz;
