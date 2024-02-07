import { useEffect, useState } from "react";
import Card from "./Card";
import capybara from "../images/capybara.jpg";
import cat from "../images/cat.jpg";
import otter from "../images/otter.jpg";
import panda from "../images/panda.jpg";
import possum from "../images/possum.jpg";
import raccoon from "../images/raccoon.jpg";
import "../style/style.scss";

const data = [
  { src: capybara, matched: false },
  { src: cat, matched: false },
  { src: otter, matched: false },
  { src: panda, matched: false },
  { src: possum, matched: false },
  { src: raccoon, matched: false },
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
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstCard.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetCards();
      } else {
        setTimeout(() => resetCards(), 1000);
      }
    }
  }, [firstCard, secondCard]);

  return (
    <div className="App">
      <h1>Memory Game</h1>

      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === firstCard || card === secondCard || card.matched}
          />
        ))}
      </div>
      <button className="start" onClick={shuffleCards}>
        Новая игра
      </button>
    </div>
  );
}

export default App;
