import '../styles/cardList.css';
import searchIcon from '../assets/searchIcon.svg';

import Card from './Card';
import useFolderData from '../hooks/useFolderData';

function CardList() {
  const placeholder = '링크를 검색해 보세요.';
  const cardsArray = useFolderData('cards');

  return (
    <div className="cards-container">
      <form className="cards-container__search">
        <img className="search--icon" src={searchIcon} alt="searchIcon"></img>
        <input className="search--input" placeholder={placeholder}></input>
      </form>
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
