import back from "../images/back.png";

function Card({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className="card">
      <div>
        <img className="card_front" src={card.src} alt="card front" />
        <img
          className="card_back"
          src={back}
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}

export default Card;
