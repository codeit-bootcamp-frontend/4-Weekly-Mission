import './CardList.css';
import SearchBar from '../SearchBar/SearchBar';
import CardListItem from './CardListItem';

function CardList() {
  return (
    <div className="cardlist">
      <SearchBar />
      <CardListItem />
    </div>
  );
}

export default CardList;
