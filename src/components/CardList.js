import '../styles/cards.css';
import searchIcon from '../assets/searchIcon.svg';
import { useState, useEffect } from 'react';

function CardList() {
  const [cardsArray, setCardsArray] = useState([]);
  const placeholder = '링크를 검색해 보세요.';

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          'https://bootcamp-api.codeit.kr/api/sample/folder'
        );
        const result = await response.json();
        setCardsArray(
          result.folder.links.map((link) => ({
            ...link,
          }))
        );
      } catch (e) {
        console.log('카드리스트 데이터 fetch오류', e);
      }
    };
    console.log(cardsArray);
    getData();
  }, []);

  return (
    <div className="cards-container">
      <form className="cards-container__search">
        <img className="search--icon" src={searchIcon} alt="searchIcon"></img>
        <input className="search--input" placeholder={placeholder}></input>
      </form>
      <div className="cards-container__cards-list"></div>
    </div>
  );
}

export default CardList;
