import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import { fetchQuizQuestions, Difficulty } from "./../API";

const TOTAL_QUESTIONS = 10;

export interface HelloWorldProps {
  userName: string;
  lang: string;
}
const App = (props: HelloWorldProps) => {
  const [loading, setloading] = useState(false);
  const [questions, setquestions] = useState([]);
  const [number, setnumber] = useState(0);
  const [userAnswers, setuserAnswers] = useState([]);
  const [score, setscore] = useState(0);
  const [gameOver, setgameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTrivia = async () => {};
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};

  return (
    <div className='App'>
      <h1>Welcome to Quiz</h1>
      <button className='start' onClick={startTrivia}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading Questions...</p>
      {/* <QuestionCard
        question={questions.length ? questions[number].question : undefined}
        answer={questions.length ? questions[number].answers : undefined}
        callback={checkAnswer}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
      /> */}
      <button className='next' onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
};

export default App;
