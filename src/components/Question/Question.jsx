import "./Question.css";
import React from "react";
import PropTypes from "prop-types";
export default function Question({ question, onClickAnswer }) {
  return (
    <div className="container">
      <h2 className="question">{question.question}</h2>
      <ul className="answer-container">
        {question.answers.map((el, index) => (
          <li key={el} className="answer" onClick={() => onClickAnswer(index)}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

Question.propTypes = {
  onClickAnswer: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
};
