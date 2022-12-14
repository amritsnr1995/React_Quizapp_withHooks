import { createContext } from "react";
import { useReducer } from "react";
import questions from '../data'
const initialState = {
    currentQuestionIndex: 0,
    questions,
    showResults:false,
  };
  const reducer = (state, action) => {
    if (action.type === "NEXT_QUESTION") {
        const showResults = state.currentQuestionIndex===state.questions.length-1;
        const currentQuestionIndex = showResults?state.currentQuestionIndex:state.currentQuestionIndex+1;
      return {
        ...state,
        currentQuestionIndex,
        showResults,
      };
    }
    return state;
  };

export const QuizContext = createContext();

export const QuizProvider = ({children})=> {
    const value = useReducer(reducer, initialState);
  console.log(value);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>

}
