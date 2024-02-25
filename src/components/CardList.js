import '../styles/CardList.css';
import Card from './Card';

const CardList = ({ folderInfo, isIconVisible = true }) => {
  const card = folderInfo?.folder.links;

  return (
    <>
      <div className='cardlist'>
        {card ? (
          <>
            {card.map(card => (
              <Card card={card} key={card.id} isIconVisible={isIconVisible} />
            ))}
          </>
        ) : (
          <div>저장된 링크가 없습니다.</div>
        )}
      </div>
    </>
  );
};

export default CardList;
