import Card from "./Card";
import "./CardList.css";

function CardList({ selectedFolderData }) {
  return (
    <div className="cardList">
      {selectedFolderData.map((cardData) => (
        <Card key={cardData.id} data={cardData} />
      ))}
    </div>
  );
}
export default CardList;
