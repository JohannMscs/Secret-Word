//css
import "./GameScreen.css"

const GameScreen = ({verifyletter}) => {
  return (
    <div className="game">GameScreen
      <h1>Game</h1>
      <button onClick={verifyletter}> finalizar jogo</button>


    </div>
  )
}

export default GameScreen