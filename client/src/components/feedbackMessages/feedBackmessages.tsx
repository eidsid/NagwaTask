import { useState, useEffect } from "react";
import "./FeedbackMessages.css";
// import wrongSound from "../sounds/wrong.mp3";
interface FeedbackMessageProps {
  isCorrect: boolean;
  isAnswered: boolean;
}

const FeedbackMessage: React.FC<FeedbackMessageProps> = ({
  isCorrect,
  isAnswered,
}) => {
  const [Active, setActive] = useState<boolean>(false);

  //" audio pathes "
  const correctAudioPath = "../sounds/correct.mp3";
  const wrongAudioPath = "../sounds/wrong.mp3";

  /*
   *check if the user answered or not and active if answer.
   *
   * play audio based on the answer
   *
   *disactive is component is end
   */
  function audioplay(isCrorr: boolean) {
    if (isCrorr) {
      new Audio(correctAudioPath).play();
    } else {
      new Audio(wrongAudioPath).play();
    }
  }
  useEffect(() => {
    if (isAnswered) {
      setActive(true);
      audioplay(isCorrect);
    }
    return () => setActive(false);
  }, [isAnswered]);

  return (
    <p
      className={`feedback-message ${Active && "isActive"} ${
        isCorrect ? "correct" : "incorrect"
      }`}
    >
      {isCorrect ? "Correct!" : "Incorrect."}
    </p>
  );
};

export default FeedbackMessage;
