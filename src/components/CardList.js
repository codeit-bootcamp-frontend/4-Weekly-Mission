import '../style/CardList.css';
import Searchbar from './Searchbar';
import CardListItem from './CardListItem';

function CardList() {
  return (
    <div className="cardlist">
      <Searchbar />
      <CardListItem />
    </div>
  );
}

export default CardList;
