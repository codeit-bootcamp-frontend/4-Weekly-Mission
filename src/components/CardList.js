import SearchBar from './common/SearchBar';
import Card from './common/Card';
import './CardList.css';

export default function CardList({ cardDataList = [] }) {
  return (
    <div className="cardList">
      <SearchBar />
      <div className="cardContainer">
        {cardDataList.map(cardData => (
          <Card key={cardData.id} data={cardData} />
        ))}
      </div>
    </div>
  );
}
