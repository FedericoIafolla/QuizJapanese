import React, { useState } from "react";
import "./MainPage.css";
import QuizModal from "../QuizModal/QuizModal";

const MainPage: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedAlphabet, setSelectedAlphabet] = useState<string>("hiragana");
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<string>("difficile");
  const [selectedGroup, setSelectedGroup] = useState<string>("vocali");

  const handleAlphabetClick = (alphabet: string) => {
    setSelectedAlphabet(alphabet);
    if (alphabet === "kanji") {
      setSelectedDifficulty("difficile");
      setSelectedGroup("vocali");
    } else {
      setSelectedDifficulty("difficile");
      setSelectedGroup("vocali");
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const groups = [
    "vocali",
    "ka",
    "sa",
    "ta",
    "na",
    "ha",
    "ma",
    "ya",
    "ra",
    "wa",
    "n",
  ];

  return (
    <div className="main-page">
      <h1>Benvenuto nel quiz degli alfabeti giapponesi!</h1>
      <div className="alphabet-selection">
        <button
          className={selectedAlphabet === "hiragana" ? "selected" : ""}
          onClick={() => handleAlphabetClick("hiragana")}
        >
          Hiragana
        </button>
        <button
          className={selectedAlphabet === "katakana" ? "selected" : ""}
          onClick={() => handleAlphabetClick("katakana")}
        >
          Katakana
        </button>
        <button
          className={selectedAlphabet === "kanji" ? "selected" : ""}
          onClick={() => handleAlphabetClick("kanji")}
        >
          Kanji
        </button>
      </div>
      <div className="difficulty-selection" style={{ marginTop: "20px" }}>
        <button
          className={selectedDifficulty === "facile" ? "selected" : ""}
          onClick={() => setSelectedDifficulty("facile")}
        >
          Facile
        </button>
        <button
          className={selectedDifficulty === "medio" ? "selected" : ""}
          onClick={() => setSelectedDifficulty("medio")}
        >
          Medio
        </button>
        <button
          className={selectedDifficulty === "difficile" ? "selected" : ""}
          onClick={() => setSelectedDifficulty("difficile")}
        >
          Difficile
        </button>

        {/* Mostra i gruppi solo se l'alfabeto non è Kanji */}
        <div
          className={`group-container ${
            selectedAlphabet === "kanji" ? "hidden" : ""
          }`}
          style={{ marginTop: "10px" }}
        >
          <div
            className={`group-selection ${
              selectedDifficulty === "facile" ? "active" : "inactive"
            }`}
          >
            {groups.map((group) => (
              <button
                key={group}
                className={selectedGroup === group ? "selected" : ""}
                onClick={() => setSelectedGroup(group)}
                disabled={selectedAlphabet === "kanji"}
              >
                {group.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button className="start-quiz-btn" onClick={startQuiz}>
          Inizia il Quiz
        </button>
      </div>
      {quizStarted && (
        <QuizModal
          alphabet={selectedAlphabet}
          difficulty={selectedDifficulty}
          group={
            (selectedAlphabet === "hiragana" ||
              selectedAlphabet === "katakana") &&
            selectedDifficulty === "facile"
              ? selectedGroup
              : undefined
          }
        />
      )}
    </div>
  );
};

export default MainPage;
