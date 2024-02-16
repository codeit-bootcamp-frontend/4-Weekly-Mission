import CardItem from './CardItem';
import './CardList.css';

const CardList = ({ links }) => {
  return (
    <div className="CardList">
      {links.map(list => (
        <CardItem key={list.id} {...list} />
      ))}
    </div>
  );
};

export default CardList;
