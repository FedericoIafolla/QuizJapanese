import React, { useState } from "react";
import "./MainPage.css";
import QuizModal from "../QuizModal/QuizModal";
import backgroundImage from "../../img/jap1.jpg";

const MainPage: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedAlphabet, setSelectedAlphabet] = useState<string>("hiragana");

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div
      className="main-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h2>Benvenuto nel quiz degli alfabeti giapponesi!</h2>
      <div className="alphabet-selection">
        <button
          className={selectedAlphabet === "hiragana" ? "selected" : ""}
          onClick={() => setSelectedAlphabet("hiragana")}
        >
          Hiragana
        </button>
        <button
          className={selectedAlphabet === "katakana" ? "selected" : ""}
          onClick={() => setSelectedAlphabet("katakana")}
        >
          Katakana
        </button>
        <button
          className={selectedAlphabet === "kanji" ? "selected" : ""}
          onClick={() => setSelectedAlphabet("kanji")}
        >
          Kanji
        </button>
      </div>
      <button className="start-quiz-btn" onClick={startQuiz}>
        Inizia il Quiz
      </button>
      {quizStarted && <QuizModal alphabet={selectedAlphabet} />}
    </div>
  );
};

export default MainPage;
