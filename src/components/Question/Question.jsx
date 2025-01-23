import "./Question.css";
import PropTypes from "prop-types";
export default function Question({ question, onClickAnswer, step, count }) {
  return (
    <div className="container">
      <p className="progress">{`${step + 1}/${count}`}</p>
      <h2 className="question">{question.question}</h2>
      {question?.img ? (
        <img src={question?.img} className="question_img" />
      ) : (
        <></>
      )}
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
  step: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};
