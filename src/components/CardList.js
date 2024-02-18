import '../styles/CardList.css';
import Card from '../components/Card';

const CardList = ({ folderInfo, isIconVisible = true }) => {
  const cardList = folderInfo?.folder.links;

  return (
    <div className="cardlist">
      {cardList ? (
        <>
          {cardList.map((card) => (
            <Card card={card} key={card.id} isIconVisible={isIconVisible} />
          ))}
        </>
      ) : (
        <div>폴더가 비어있습니다.</div>
      )}
    </div>
  );
}

export default CardList;