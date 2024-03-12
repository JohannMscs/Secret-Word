//css
import "./GameOverScreen.css"

const GameOverScreen = ({retry}) => {
  return (
    <div className="over">GameOverScreen
      <button onClick={retry}> voltar para o menu</button>
    </div>
  )
}

export default GameOverScreen