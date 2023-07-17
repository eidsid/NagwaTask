// the required packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

// Create an instance of Express
const app = express();

// use Middlewares
app.use(bodyParser.json());
app.use(cors());

// Read the TestData.json file
const testData = JSON.parse(fs.readFileSync("./DB/TestData.json"));

// Define the 'words' endpoint
app.get("/api/words", (req, res) => {
  //call getRandomWords function
  const words = getRandomWords(testData.wordList, 10);

  // Return the words array as a response
  res.json(words);
});

// Define the 'rank' endpoint
app.post("/api/rank", (req, res) => {
  const finalScore = req.body.score;
  console.log(finalScore);
  const scores = testData.scoresList;

  const numScoresBelow = scores.filter((score) => score < finalScore).length;

  const rankPercentage = (numScoresBelow / scores.length) * 100;

  const roundedRankPercentage = Math.round(rankPercentage * 100) / 100;

  res.json({ rank: roundedRankPercentage });
});

/* Helper function to get a random sample of n words from the 'wordsList' array
The returned array of words that should include at least one adjective one adverb one noun  one verb */

function getRandomWords(array, n) {
  const selectedWords = [];
  const wordsByPartOfSpeech = {};

  // Group the words by part of speech
  array.forEach((word) => {
    if (word.partOfSpeech in wordsByPartOfSpeech) {
      wordsByPartOfSpeech[word.partOfSpeech].push(word);
    } else {
      wordsByPartOfSpeech[word.partOfSpeech] = [word];
    }
  });

  // Select 1 word of each part of speech and then select the remaining words randomly
  const partsOfSpeech = Object.keys(wordsByPartOfSpeech);

  partsOfSpeech.forEach((part) => {
    const wordsForPart = wordsByPartOfSpeech[part];
    const selectedWord = wordsForPart[0];
    console.log(selectedWord);
    selectedWords.push(selectedWord);
  });

  // Select the remaining words randomly
  while (selectedWords.length < n) {
    const randomWord = array[Math.floor(Math.random() * array.length)];
    if (!selectedWords.includes(randomWord)) {
      selectedWords.push(randomWord);
    }
  }
  return selectedWords;
}

// create the server
const PORT = process.env.PORT || 5000;
const start = async () => {
  app.listen(PORT, () => {
    console.log(`you are serve on http://localhost:${PORT}`);
  });
};

//Start the server
start();
