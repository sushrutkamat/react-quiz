import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const FinishScreen = ({ maxPoints }) => {
  const { points, highscore, dispatch } = useQuiz();
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints}(
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} Points)</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </>
  );
};

export default FinishScreen;
