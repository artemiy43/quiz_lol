export default function Result({ correctAns, length, setStep }) {
  return (
    <div className="result">
      <h3>
        Вы правильно ответили на {correctAns} из {length} вопроса(-ов)
      </h3>
      <iframe
        src="https://giphy.com/embed/xT0xeJpnrWC4XWblEk"
        width="480"
        height="320"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <button onClick={() => setStep()}>Попробовать снова</button>
    </div>
  );
}
