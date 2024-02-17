import '../styles/cardList.css';
import Card from './Card';
import useCardsData from '../hooks/useCardsData';
import LinkSearchBar from './LinkSearchBar';
import SAMPLE_FOLDER_URL from '../constants/urls';

function CardList() {
  const cardsArray = useCardsData('cards', SAMPLE_FOLDER_URL);

  return (
    <div className="cards-container">
      <LinkSearchBar></LinkSearchBar>
      <div className="cards-container__cards-list">
        {cardsArray.map((card) => (
          <Card
            key={card.id}
            time={card.lastTimeString}
            imgUrl={card.imgUrl}
            title={card.title}
            description={card.description}
            date={card.uploadDate}
            url={card.url}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;
