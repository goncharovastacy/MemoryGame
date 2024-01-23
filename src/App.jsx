import { useState } from "react";
import "./style/style.scss";

const data = [
  { src: "./images/capybara.jpg" },
  { src: "./images/cat.jpg" },
  { src: "./images/otter.jpg" },
  { src: "./images/panda.jpg" },
  { src: "./images/possum.jpg" },
  { src: "./images/raccon.jpg" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const shuffleCards = () => {
    const shuffeledCards = [...data, ...data]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffeledCards);
    setTurns(0);
  };
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button className="start" onClick={shuffleCards}>
        New Game
      </button>
    </div>
  );
}

export default App;
