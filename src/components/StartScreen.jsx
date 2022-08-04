import React, { useState } from "react";
import "../styles/StartScreen.css";

const StartScreen = ({ quizName, onUserChoiceSubmitted }) => {
  const [userSelectedQuestionCount, setUserSelectedQuestionCount] =
    useState(20);
  const [userSelectedRandomRange, setUserSelectedRandomRange] = useState(10);
  const [userSelectedOperators, setUserSelectedOperators] = useState([
    {
      operator: "+",
      isSelected: false,
    },
    {
      operator: "-",
      isSelected: false,
    },
    {
      operator: "*",
      isSelected: false,
    },
    {
      operator: "/",
      isSelected: false,
    },
  ]);
  const questionCountOptions = [5, 10, 15, 20];
  const randomNumberRanges = [10, 20, 30, 40];

  const onSelectOperators = (e, position) => {
    let isOperatorAlreadySelected = userSelectedOperators.map(
      (operator, index) => {
        if (index === position) {
          return { ...operator, isSelected: e.target.checked };
        }
        return operator;
      }
    );
    setUserSelectedOperators(isOperatorAlreadySelected);
  };

  const onSelectQuestionCount = (e) => {
    setUserSelectedQuestionCount(e.target.value);
  };

  const onSelectRandomNumberRange = (e) => {
    setUserSelectedRandomRange(e.target.value);
  };

  return (
    <div className="start-screen-container">
      <div className="quiz-title">{quizName}</div>
      <div className="quiz-description">
        Take the quiz and test your maths skills ...
      </div>
      <form
        onSubmit={(e) =>
          onUserChoiceSubmitted(
            e,
            "quiz",
            userSelectedOperators,
            userSelectedQuestionCount,
            userSelectedRandomRange
          )
        }
        className="start-screen-form"
      >
        <div className="start-screen-input-title">
          Please select the operators for the quiz
        </div>
        <div className="start-screen-input-content">
          {userSelectedOperators.map((operator, index) => (
            <div key={index} className="start-screen-input">
              <input
                name="select-operator"
                type="checkbox"
                value={operator.operator}
                onChange={(e) => onSelectOperators(e, index)}
              />
              <label>{operator.operator}</label>
            </div>
          ))}
        </div>
        <div className="start-screen-input-title">
          Please select the total questions for the quiz
        </div>
        <div className="start-screen-input-content">
          {questionCountOptions.map((questionCountOption, index) => (
            <div key={index} className="start-screen-input">
              <input
                name="select-question-count"
                type="radio"
                value={questionCountOption}
                onChange={onSelectQuestionCount}
              />
              <label>{questionCountOption}</label>
            </div>
          ))}
        </div>
        <div className="start-screen-input-title">
          Please select the operand range for the quiz
        </div>
        <div className="start-screen-input-content">
          {randomNumberRanges.map((randomNumberRange, index) => (
            <div key={index} className="start-screen-input">
              <input
                name="select-number-range"
                type="radio"
                value={randomNumberRange}
                onChange={onSelectRandomNumberRange}
              />
              <label>{`1-${randomNumberRange}`}</label>
            </div>
          ))}
        </div>
        <div className="start-quiz-button">
          <button>Start Quiz</button>
        </div>
      </form>
    </div>
  );
};

export default StartScreen;
