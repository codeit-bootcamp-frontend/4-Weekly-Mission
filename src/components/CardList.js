import '../styles/cardList.css';

import Card from './Card';
import useFolderData from '../hooks/useFolderData';
import LinkSearchBar from './LinkSearchBar';

function CardList() {
  const cardsArray = useFolderData('cards');

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
