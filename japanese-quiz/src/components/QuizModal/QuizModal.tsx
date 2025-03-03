import React, { useEffect, useState } from "react";
import "./QuizModal.css";
import { useNavigate } from "react-router-dom";
import {
  Question,
  hiraganaQuestions,
  katakanaQuestions,
  kanjiQuestions,
} from "../../data/questions";

interface QuizModalProps {
  alphabet: string;
}

interface UserAnswer {
  question: Question;
  selectedAnswer: string;
  isCorrect: boolean;
}

const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);

const QuizModal: React.FC<QuizModalProps> = ({ alphabet }) => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    let selectedQuestions: Question[] = [];
    if (alphabet === "hiragana") {
      selectedQuestions = hiraganaQuestions;
    } else if (alphabet === "katakana") {
      selectedQuestions = katakanaQuestions;
    } else if (alphabet === "kanji") {
      selectedQuestions = kanjiQuestions;
    }
    setQuestions(shuffleArray([...selectedQuestions]));
  }, [alphabet]);

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      const answerOptions = shuffleArray([
        currentQuestion.correctAnswer,
        ...currentQuestion.wrongAnswers,
      ]);
      setOptions(answerOptions);
      setSelectedAnswer(null);
    }
  }, [questions, currentQuestionIndex]);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
      setUserAnswers([
        ...userAnswers,
        {
          question: currentQuestion,
          selectedAnswer: selectedAnswer!,
          isCorrect,
        },
      ]);
      if (currentQuestionIndex === questions.length - 1) {
        setQuizCompleted(true);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  };

  const handleResults = () => {
    navigate("/results", { state: { userAnswers, alphabet } });
  };

  const handleRestartQuiz = () => {
    window.location.reload();
  };

  if (questions.length === 0) return <div>Loading...</div>;

  return (
    <div className="quiz-modal-overlay">
      <div className={`quiz-modal ${quizCompleted ? "no-divider" : ""}`}>
        <button className="restart-btn" onClick={handleRestartQuiz}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12l9-9 9 9M4 12v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-8" />
          </svg>
        </button>

        {!quizCompleted ? (
          <div className="quiz-content">
            <div className="quiz-left">
              <h2>
                Question {currentQuestionIndex + 1}/{questions.length}
              </h2>
              <div className="symbol">
                {questions[currentQuestionIndex].symbol}
              </div>
            </div>
            <div className="quiz-right">
              {options.map((option, index) => (
                <div
                  key={index}
                  className={`option ${
                    selectedAnswer === option ? "selected" : ""
                  }`}
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
            {selectedAnswer && (
              <button className="next-button" onClick={handleNextQuestion}>
                &rarr;
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-completed">
            <h2>
              Quiz completato! Vuoi vedere il risultato delle tue risposte?
            </h2>
            <button className="results-button" onClick={handleResults}>
              Sì, portami ai risultati
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModal;
