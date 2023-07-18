# NagwaTask

<h1 align="center">Random Words Generator</h1>

<p align="center">
  <img src="[https://img.shields.io/github/license/your-username/random-words-generator ↗](https://img.shields.io/github/license/your-username/random-words-generator)" alt="License">
</p>

<p align="center">
  This is a simple web application that generates a list of 10 random words, including at least one adjective, one adverb, one noun, and one verb.
</p>

## Installation

To run the application locally, you'll need to have Node.js and npm (Node Package Manager) installed on your computer. You can download and install Node.js from the official website: [https://nodejs.org/ ↗](https://nodejs.org/)

Once you have Node.js and npm installed, follow these steps to install the application:

1. Clone this repository to your local machine using the following command:

   ````
   git clone https://github.com/eidsid/NagwaTask
   ```

   ````

2. Open a terminal window and navigate to the project directory:

   ```
   cd random-words-generator
   ```

3. Install the project dependencies using npm:

   ```
   npm install
   ```

## Usage

Once you have installed the application, you can run it using the following command:

```
npm start
```

This will start the development server and open the web application in your default web browser. You can also manually open the web application by navigating to [http://localhost:3000 ↗](http://localhost:3000) in your web browser.

## Client-side code

The client-side code for this application is written in React and is located in the `src` directory. which fetches the random words from the server and displays them in a quiz style.

## API

The application exposes a simple RESTful API that returns a list of 10 random words in JSON format. You can make a GET request to the `http://localhost:5000/api/words` endpoint to fetch the random words.

Here's an example request using the `curl` command-line tool:

```
curl http://localhost:5000/api/words
```

Here's an example response:

```json
[
  {
    "id": 1,
    "word": "happy",
    "partOfSpeech": "adjective"
  },
  {
    "id": 2,
    "word": "quickly",
    "partOfSpeech": "adverb"
  },
  {
    "id": 3,
    "word": "book",
    "partOfSpeech": "noun"
  },
  {
    "id": 4,
    "word": "run",
    "partOfSpeech": "verb"
  },
  ...
]
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project was inspired by the [Random Word Generator ↗](https://www.randomwordgenerator.org/) website.
