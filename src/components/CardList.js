import Card from './common/Card';
import './CardList.css';

export default function CardList({ cardDataList = [] }) {
  return (
    <div className="cardList">
      <div className="cardContainer">
        {cardDataList.map(cardData => (
          <Card key={cardData.id} cardData={cardData} />
        ))}
      </div>
    </div>
  );
}
