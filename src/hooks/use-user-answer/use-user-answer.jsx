import {useState} from "react";

const useUserAnswer = (question, onAnswer) => {
  const [answers, setAnswers] = useState(new Array(question.answers.length).fill(false));

  const handleAnswer = () => {
    onAnswer(question, answers);
  };

  const handleChange = (i, value) => {
    const userAnswers = answers.slice();
    userAnswers[i] = value;

    setAnswers(userAnswers);
  };

  return [answers, handleAnswer, handleChange];
};

export default useUserAnswer;
