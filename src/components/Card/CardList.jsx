import Card from './Card';

function CardList({ items = [] }) {
  return (
    <div className="card-list">
      {items?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CardList;
