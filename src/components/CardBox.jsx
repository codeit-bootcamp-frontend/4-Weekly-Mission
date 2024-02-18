import "./css/Main.css";
import Card from "./Card";

function CardBox({ linksData }) {
  return (
    <div className="cards-container">
      {linksData.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardBox;
