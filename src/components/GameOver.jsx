import './GameOver.css';

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h2>Fim do Jogo!</h2>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button onClick={retry}>Resetar o jogo</button>
    </div>
  )
}

export default GameOver