import React, { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Answer from "./Answer";

function Questions({questions}) {
    const [quizState]= useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];


    
  return (
    <>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </>
  );
}

export default Questions;
