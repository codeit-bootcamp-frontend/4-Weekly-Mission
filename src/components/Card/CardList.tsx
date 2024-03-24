import Card, { CardItem } from './Card';

interface CardListProps {
  items: CardItem[];
}

function CardList({ items }: CardListProps) {
  return (
    <div className="card-list">
      {items?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CardList;
