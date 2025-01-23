import { useEffect, useState } from "react";
import "./App.css";
import Question from "./components/Question/Question";
import KUTE from "kute.js";
import Result from "./components/Result/Result";
import questions from "./questions";
import questionsEng from "./questions_eng";

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [languageRu, setLanguage] = useState(true);
  const question = languageRu ? questions[step] : questionsEng[step];
  const count = questions.length;

  function onClickAnswer(index) {
    setStep(step + 1);

    if (index === question.correct) setCorrect(correct + 1);
  }

  function restart() {
    setStep(0);
    setCorrect(0);
  }

  function toggleLanguage() {
    setLanguage((language) => !language);
  }

  useEffect(() => {
    const tween = KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: 999, duration: 3000, yoyo: true }
    ).start();
  });

  return (
    <main className="main-container">
      <div className="main">
        <button className="main_language" onClick={toggleLanguage}>
          {languageRu ? "ru" : "eng"}
        </button>
        {step !== questions.length ? (
          <Question
            question={question}
            onClickAnswer={onClickAnswer}
            step={step}
            count={count}
          />
        ) : (
          <Result
            length={questions.length}
            correctAns={correct}
            setStep={restart}
          />
        )}
      </div>
      <svg
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="main__blob"
      >
        <g
          transform="translate(435.02917960786186 309.4308913864628)"
          className="blob1"
        >
          <path
            id="blob1"
            d="M172.8 -125C221.5 -76.7 257 -5 238.9 46.5C220.7 98 149 129.2 85 149.7C21 170.3 -35.3 180.2 -92.8 163.7C-150.4 147.1 -209.3 104.2 -213.5 56.9C-217.8 9.6 -167.6 -42 -122.9 -89.3C-78.2 -136.7 -39.1 -179.8 11.5 -189C62 -198.1 124.1 -173.3 172.8 -125"
            fill="#BB004B"
            stroke="#BB004B"
            strokeWidth="6"
          ></path>
        </g>
        <g
          transform="translate(452.5425740361932 341.7850594441245)"
          className="blob2"
        >
          <path
            id="blob2"
            d="M179.7 -157.3C204.5 -112.1 176.8 -39 149 14.4C121.1 67.7 93.1 101.5 56.5 120.1C20 138.8 -25.2 142.4 -62.7 125.9C-100.2 109.5 -130 73 -157.4 17.5C-184.8 -38 -209.7 -112.5 -183 -158.1C-156.4 -203.7 -78.2 -220.3 -0.4 -220C77.4 -219.7 154.8 -202.5 179.7 -157.3"
            fill="none"
            stroke="#BB004B"
            strokeWidth="6"
          ></path>
        </g>
      </svg>
    </main>
  );
}

export default App;
