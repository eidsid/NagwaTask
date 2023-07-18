// the required packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Create an instance of Express
const app = express();

// use Middlewares
app.use(bodyParser.json());
app.use(cors());

// get the 'words' endpoint and use it as middlewares
const words = require("./router/words");
app.use("/api/words", words);

//get  the 'rank' endpoint and use it as middlewares
const rank = require("./router/rank");
app.use("/api/rank", rank);

// create the server
const PORT = process.env.PORT || 5000;
const start = async () => {
  app.listen(PORT, () => {
    console.log(`you are serve on http://localhost:${PORT}`);
  });
};

//Start the server
start();
