// get the words data from api
const { wordsData } = require("../api/api");

const getWords = (req, res) => {
  const words = getRandomWords(wordsData, 10);
  res.send(words);
};

//function to get random words
function getRandomWords(arrayOfWords, lengthOfRequiredWords) {
  const selectedWords = [];
  const wordsByPartOfSpeech = {};

  // Group the words by part of speech
  arrayOfWords.forEach((word) => {
    if (word.partOfSpeech in wordsByPartOfSpeech) {
      wordsByPartOfSpeech[word.partOfSpeech].push(word);
    } else {
      wordsByPartOfSpeech[word.partOfSpeech] = [word];
    }
  });

  // Select 1 word of each part of speech and then select the remaining words randomly
  const partsOfSpeech = Object.keys(wordsByPartOfSpeech);

  partsOfSpeech.forEach((pos) => {
    const wordsForPos = wordsByPartOfSpeech[pos];
    const selectedWord = wordsForPos[0];
    selectedWords.push(selectedWord);
  });

  // Select the remaining words randomly and check if the word exist or not
  while (selectedWords.length < lengthOfRequiredWords) {
    const randomWord =
      arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
    if (!selectedWords.includes(randomWord)) {
      selectedWords.push(randomWord);
    }
  }
  return selectedWords;
}

module.exports = {
  getWords,
};
