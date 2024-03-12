//css
import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h2>StartScreen</h2>

      <p>clique no botão avaixo para iniciar o jogo</p>
      <button onClick={startGame}>Iniciar o jogo</button>
    </div>
  );
};

export default StartScreen;
