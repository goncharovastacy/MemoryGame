import { useEffect, useState } from "react";
import Card from "./components/Card";
import capybara from "./images/capybara.jpg";
import cat from "./images/cat.jpg";
import otter from "./images/otter.jpg";
import panda from "./images/panda.jpg";
import possum from "./images/possum.jpg";
import raccoon from "./images/raccoon.jpg";
import "./style/style.scss";

const data = [
  { src: capybara },
  { src: cat },
  { src: otter },
  { src: panda },
  { src: possum },
  { src: raccoon },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  const shuffleCards = () => {
    const shuffeledCards = [...data, ...data]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffeledCards);
    setTurns(0);
  };

  const resetCards = () => {
    setFirstCard(null);
    setSecondCard(null);
    setTurns(turns + 1);
  };

  const handleChoice = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.src === secondCard.src) {
        console.log("Карты совпадают");
        resetCards();
      } else {
        console.log("Карты не совпадают");
        resetCards();
      }
    }
  }, [firstCard, secondCard]);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button className="start" onClick={shuffleCards}>
        New Game
      </button>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
