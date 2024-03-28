import Card from "./Card";
import "./CardList.css";

interface CardListInterface {
  id: number;
  created_at: string;
  updated_at: null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

type CardListProps = {
  selectedFolderData: CardListInterface[];
};

function CardList({ selectedFolderData }: CardListProps) {
  return (
    <div className="cardList">
      {selectedFolderData.map((cardData) => (
        <Card key={cardData.id} data={cardData} />
      ))}
    </div>
  );
}
export default CardList;
