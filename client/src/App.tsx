import React, { useEffect, useState } from "react";
import WordDisplay from "./components/displayWord/displayWord";
import FeedbackMessage from "./components/feedbackMessages/feedBackmessages";
import ProgressBar from "./components/progressBar/progressBar";
import { getWords, getRank } from "./api/api";
import OptionButton from "./components/OptionButton/OptionButton";
import "./App.css";
interface wordsProps {
  id: number;
  word: string;
  pos: string;
}

const App: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [isAnswered, setisAnswered] = useState<boolean>(false);
  const [isCorrect, setisCorrect] = useState<boolean>(true);
  const [answeredCount, setAnsweredCount] = useState<number>(0);
  const [words, setwords] = useState<wordsProps[]>([]);
  const [Rank, setRank] = useState<number>(0);
  const [GameOver, setGameOver] = useState<boolean>(false);

  const api = async () => {
    const data = await getWords;
    setwords(data.data);
  };

  useEffect(() => {
    if (!words.length) api();
  });

  /**
   * handel options buttons
   *
   * 1- get the clicked  button by label
   *
   * 2- ste isAnswered to true
   *
   * 3- check if answer is right andd add current answer setAnsweredCount
   *
   * 4- set isCorrect to true is answer is true nore false
   */
  function handeloption(label: string): void {
    setisAnswered(true);
    if (words[currentWordIndex]?.pos === label) {
      setAnsweredCount((prev) => (prev += 1));
      setisCorrect(true);
    } else {
      setisCorrect(false);
    }
  }

  /**
   *set setisAnswered(false)
   */
  function handelNext(): void {
    setisAnswered(false);
    //call handegameover function
    handelGame();
  }

  /**
   *set setCurrentWordIndex to the next word index if less than words.length-1
   *else set gameOver to true and call handelRank function
   */
  function handelGame() {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex((prev) => (prev += 1));
    } else {
      setGameOver(true);
      handelRank(answeredCount);
    }
  }

  // send score to server and get rank
  const handelRank = async (score: number) => {
    const rank = await getRank(score * 10);
    setRank(rank.data.rank);
  };

  return (
    <div className="container">
      <div className="progressContainer">
        <span>Progress</span>{" "}
        <ProgressBar current={currentWordIndex} total={words.length} />{" "}
      </div>
      {!GameOver ? (
        <>
          <WordDisplay word={words[currentWordIndex]?.word} />

          <div className="options">
            <OptionButton
              label="adverb"
              answer={words[currentWordIndex]?.pos}
              func={handeloption}
              isAnswered={isAnswered}
            />
            <OptionButton
              label="noun"
              answer={words[currentWordIndex]?.pos}
              func={handeloption}
              isAnswered={isAnswered}
            />
            <OptionButton
              label="verb"
              answer={words[currentWordIndex]?.pos}
              func={handeloption}
              isAnswered={isAnswered}
            />
            <OptionButton
              label="adjective"
              answer={words[currentWordIndex]?.pos}
              func={handeloption}
              isAnswered={isAnswered}
            />
          </div>
          <FeedbackMessage isCorrect={isCorrect} isAnswered={isAnswered} />
          <button
            className={`btn-primary ${!isAnswered && "notAllowed"}`}
            onClick={handelNext}
            disabled={!isAnswered}
          >
            Next
          </button>
        </>
      ) : (
        <>
          {/* when the game is over */}
          <WordDisplay word={`rank : ${Rank} %`} />
          <div className="currentAnswer">
            <span> correct Answers : {answeredCount}</span>
            <span>wrong answers:{10 - answeredCount}</span>
          </div>

          <button
            className="btn-primary"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </>
      )}
    </div>
  );
};

export default App;
