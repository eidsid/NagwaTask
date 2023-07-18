// get the scores data data from api
const { scoresData } = require("../api/api");

// to sent the RankPercentage to the user
const getRank = (req, res) => {
  const finalScore = req.body.score;
  const scores = scoresData;

  //calc scores below the user Final score
  const numScoresBelow = scores.filter((score) => score < finalScore).length;

  const rankPercentage = numScoresBelow / scores.length;

  const roundedRankPercentage = Math.round(rankPercentage * 100);

  res.json({ rank: roundedRankPercentage });
};

module.exports = {
  getRank,
};
