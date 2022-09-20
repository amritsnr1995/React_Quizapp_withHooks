import React, { useContext } from "react";
import Questions from "./Questions";
import { QuizContext } from "../contexts/quiz";

function Quiz() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <>
      <div className="quiz">
        <div>
          <div className="score">Questions {quizState.currentQuestionIndex+1}/{quizState.questions.length}</div>
          <Questions />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next Question
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
