//css
import "./GameOverScreen.css"

const GameOverScreen = ({retry, score}) => {
  return (
    <div className="over">
      <h1>Game Over</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button onClick={retry}> voltar para o menu</button>
    </div>
  )
}

export default GameOverScreen