import './CardList.css';
import SearchBar from './common/SearchBar';
import Card from './common/Card';

export default function CardList({ cardsData = [] }) {
  return (
    <div className="cardList">
      <SearchBar />
      <div className="cardContainer">
        {cardsData.map(cardData => (
          <Card key={cardData.id} data={cardData} />
        ))}
      </div>
    </div>
  );
}
