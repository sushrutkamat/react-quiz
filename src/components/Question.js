import React from "react";
import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

const Question = ({ question }) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
};

export default Question;
