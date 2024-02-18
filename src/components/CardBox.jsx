import "./css/Main.css";
import Card from "./Card";

function CardBox({ linksData }) {
  return (
    <div className="cards-container">
      {linksData.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </div>
  );
}

export default CardBox;
