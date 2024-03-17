//css
import "./App.css";

//react
import { useCallback, useEffect, useState } from "react";

// data
import { wordList } from "./datas/Word";

//components
import GameOverScreen from "./components/GameOverScreen";
import GameScreen from "./components/GameScreen";
import StartScreen from "./components/StartScreen";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const guessesNumber = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [word] = useState(wordList);

  const [pickWord, setPickWord] = useState("");
  const [pickCategory, setPickCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesNumber);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    //escolher a palavra e a categoria

    const categories = Object.keys(word);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);
    const words =
      word[category][Math.floor(Math.random() * word[category].length)];
    console.log(words);
    return { words, category };
  }, [word]);

  //comecar o jogo secret word
  const startGame = useCallback(() => {
    clearLetterStages()

    const { words, category } = pickWordAndCategory();

    //criando um array de cartas
    let wordsLetters = words.split("");
    wordsLetters = wordsLetters.map((l) => l.toLowerCase());
    console.log(wordsLetters);

    console.log(category, words);

    setGameStage(stages[1].name);

    setPickWord(words);
    setPickCategory(category);
    setLetters(wordsLetters);
  }, [pickWordAndCategory]);

  //processamento da letra de entrada
  const verifyletters = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }

    console.log(guessedLetters);
    console.log(wrongLetters);
  };

  const clearLetterStages = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if (guesses <= 0) {
      //reseta todos os estagios
      clearLetterStages();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  //valida a condição de vitória
  useEffect(() => {

   const uniqueLetters = [... new Set(letters)] 

   if(guessedLetters.length === uniqueLetters.length){
    //adição da pontuação
    setScore((actualScore) => actualScore += 100)

    //próxima palavra após validação da condição de vitória

    startGame()


  }

  }, [guessedLetters, letters, startGame])

  //recomeçar o jogo
  const retry = () => {
    setScore(0);
    setGuesses(guessesNumber);
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      <h1 className="master_title">Secret Word</h1>
      <div className="modes">
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && (
          <GameScreen
            verifyletters={verifyletters}
            pickWord={pickWord}
            pickCategory={pickCategory}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            guesses={guesses}
            score={score}
          />
        )}
        {gameStage === "end" && <GameOverScreen retry={retry} score={score} />}
      </div>
    </div>
  );
}

export default App;
