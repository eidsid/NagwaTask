const fs = require("fs");
const { readFileSync } = fs;

// Read the TestData.json file
const testData = JSON.parse(readFileSync("./DB/TestData.json"));

module.exports = {
  wordsData: testData.wordList,
  scoresData: testData.scoresList,
};
