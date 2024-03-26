import React, { useState } from "react";
import "./App.css";
import questions from "./constants/questions.json";
import Question from "./components/question";
import Result from "./components/result";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };
  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };
  console.log(userAnswers);
  return (
    <div className="app">
      <h1>World Quiz</h1>
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}

      {currentQuestion == questions.length && (
        <Result
          userAnswers={userAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
};

export default App;
