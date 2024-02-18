import '../styles/CardList.css';
import Card from '../components/Card';

const CardList = ({ folderInfo }) => {
  const cardList = folderInfo?.folder.links;
  console.log(cardList);

  return (
    <div className="cardlist">
      {cardList ? (
        <>
          {cardList.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </>
      ) : (
        <div>폴더가 비어있습니다.</div>
      )}
    </div>
  );
}

export default CardList;