import '../styles/cards.css';
import searchIcon from '../assets/searchIcon.svg';
function Cards() {
  const placeholder = '링크를 검색해 보세요.';
  return (
    <div className="cards-container">
      <div className="cards-container__search">
        <img className="search--icon" src={searchIcon} alt="searchIcon"></img>
        <input className="search--input" placeholder={placeholder}></input>
      </div>
      <div className="cards-container__cards-list"></div>
    </div>
  );
}

export default Cards;
