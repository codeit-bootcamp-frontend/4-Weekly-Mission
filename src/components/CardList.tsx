import '../styles/cardList.css';
import Card from './Card';
import useCardsData from '../hooks/useCardsData';
import LinkSearchBar from './LinkSearchBar';

import { CARDS } from '../constants/fetchConstants';
import { SAMPLE_FOLDER_URL } from '../constants/urls';
import { SharedPageLink } from '../types/interfaces/fetchDatas';

function CardList() {
  const cardsArray = useCardsData(CARDS, SAMPLE_FOLDER_URL) as SharedPageLink[];

  return (
    <div className="cards-container">
      <LinkSearchBar></LinkSearchBar>
      <div className="cards-container__cards-list">
        {cardsArray &&
          cardsArray.map((card) => (
            <Card
              key={card.id}
              id={card.id}
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
