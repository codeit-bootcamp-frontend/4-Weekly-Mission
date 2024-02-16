import "./css/Main.css";
import Card from "./Card";

function CardBox({ folderData }) {
  const cards = folderData && folderData.links;
  return (
    <div className="cards-container">
      {cards && cards.map((card) => <Card key={card.id} card={card} />)}
    </div>
  );
}

export default CardBox;
