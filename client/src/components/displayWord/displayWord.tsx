import React from "react";
import "./WordDisplay.css";

interface WordDisplayProps {
  word: string;
}

const wordDisplay: React.FC<WordDisplayProps> = ({ word }) => {
  return <h1 className="word-display">{word}</h1>;
};

export default wordDisplay;
