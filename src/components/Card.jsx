import back from "../images/back.png";

function Card({ src }) {
  return (
    <div className="card">
      <div>
        <img className="card_front" src={src} alt="card front" />
        <img className="card_back" src={back} alt="card back" />
      </div>
    </div>
  );
}

export default Card;
