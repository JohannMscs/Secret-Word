//css
import { useState, useRef } from "react"
import "./GameScreen.css"

const GameScreen = ({verifyletters, pickWord, pickCategory, letters, guessedLetters, wrongLetters, guesses, score}) => {

  const [letter, setLetter] = useState("")
  const letterInputRef = useRef(null)

  const handlesSubimit = (e) => {
    e.preventDefault()
    verifyletters(letter)

    setLetter("")

    letterInputRef.current.focus()
  }


  return (
    <div className="game">
      <p className="points">
        <span> Pontuação: {score}</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h2 className="tipo">
        Dica sobre a palavra: <span>{pickCategory}</span>
      </h2>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letters">{letter}</span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="lettersContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form onSubmit={handlesSubimit}>
          <input type="text" name="letters" maxLength="1" required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef}/>
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já usadas: </p>
        {wrongLetters.map((letter, i) =>(
          <span key={i} >{letter}, </span>
        ))}
      </div>
    </div>
  )
}

export default GameScreen