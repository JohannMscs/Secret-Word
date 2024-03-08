//css
import './App.css';

//react
import { useCallback, useEffect, useState } from 'react';

// data
import {wordList} from "./datas/Word"

//components
import HomeStart from './HomeStart';
import GameOverScreen from './components/GameOverScreen';
import GameScreen from './components/GameScreen';
import StartScreen from './components/StartScreen';

  const stages = [
    {id: 1, name: "start"},
    {id: 2, name: "game"},
    {id: 3, name: "end"},
  ]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [word] = useState(wordList)

  console.log(word)

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen/>}
      {gameStage === "game" && <GameScreen/>}
      {gameStage === "end" && <GameOverScreen/>}
      <h1>Secret Word</h1>
      <HomeStart/>
    </div>
  );
}

export default App;
