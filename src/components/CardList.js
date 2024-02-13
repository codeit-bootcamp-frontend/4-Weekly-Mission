import '../styles/cards.css';
import searchIcon from '../assets/searchIcon.svg';
import { useState, useEffect } from 'react';
import { formatDate, getLastTime } from '../utils/timeCalculater';
import Card from './Card';

function CardList() {
  const [cardsArray, setCardsArray] = useState([]);
  const placeholder = '링크를 검색해 보세요.';

  useEffect(() => {
    const getCardsData = async () => {
      try {
        const response = await fetch(
          'https://bootcamp-api.codeit.kr/api/sample/folder'
        );
        const result = await response.json();
        setCardsArray(
          result.folder.links.map((link) => ({
            id: link.id,
            url: link.url,
            imgUrl: link.imageSource,
            title: link.title,
            description: link.description,
            lastTimeString: getLastTime(link.createdAt),
            uploadDate: formatDate(link.createdAt),
          }))
        );
      } catch (e) {
        console.log('카드리스트 데이터 fetch오류', e);
      }
    };
    getCardsData();
  }, []);

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
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default CardList;
