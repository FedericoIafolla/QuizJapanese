import React from "react";
import { useLocation } from "react-router-dom";
import "./ResultsPage.css";

interface Question {
  id: number;
  symbol: string;
  correctAnswer: string;
  wrongAnswers: string[];
}

interface UserAnswer {
  question: Question;
  selectedAnswer: string;
  isCorrect: boolean;
}

const ResultsPage: React.FC = () => {
  const location = useLocation();
  const { userAnswers, alphabet } = location.state as {
    userAnswers: UserAnswer[];
    alphabet: string;
  };

  return (
    <div className="results-page">
      <h2>Risultati del Quiz - {alphabet}</h2>
      <table className="results-table">
        <thead>
          <tr>
            <th>Simbolo</th>
            <th>Risposta Corretta</th>
            <th>La tua Risposta</th>
          </tr>
        </thead>
        <tbody>
          {userAnswers.map((ans, index) => (
            <tr key={index}>
              <td>{ans.question.symbol}</td>
              <td>{ans.question.correctAnswer}</td>
              <td className={ans.isCorrect ? "correct" : "incorrect"}>
                {ans.selectedAnswer}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsPage;
