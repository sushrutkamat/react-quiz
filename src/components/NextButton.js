import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const NextButton = ({ numQuestions }) => {
  const { dispatch, answer, index } = useQuiz();
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "nextQuestion" });
        }}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "finished" });
        }}
      >
        Finish
      </button>
    );
};

export default NextButton;
