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

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [word] = useState(wordList);

  const [pickWord, setPickWord] = useState("");
  const [pickCategory, setPickCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    //escolher a palavra e a categoria

    const categories = Object.keys(word);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);
    const words =
      word[category][Math.floor(Math.random() * word[category].length)];
    console.log(words);
    return { words, category };
  };

  //comecar o jogo secret word
  const startGame = () => {
    const { words, category } = pickWordAndCategory();

    //criando um array de cartas
    let wordsLetters = words.split("");
    wordsLetters = wordsLetters.map((l) => l.toLowerCase());
    console.log(wordsLetters);

    console.log(category, words);

    setGameStage(stages[1].name);

    setPickWord(words);
    setPickCategory(category);
    setLetters(letters);
  };

  //processamento da letra de entrada
  const verifyletter = () => {
    setGameStage(stages[2].name);
  };

  //recomeçar o jogo
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      <h1 className="master_title">Secret Word</h1>
      <div className="modes">
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && <GameScreen verifyletter={verifyletter} />}
        {gameStage === "end" && <GameOverScreen retry={retry} />}
      </div>
    </div>
  );
}

export default App;
