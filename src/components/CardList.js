import '../styles/CardList.css';
import Card from './Card';

const CardList = ({ folderInfo }) => {
  const card = folderInfo?.folder.links;
  console.log(card);

  return (
    <>
      <div className='cardlist'>
        {card ? (
          <>
            {card.map(card => (
              <Card card={card} key={card.id} />
            ))}
          </>
        ) : (
          <div>폴더가 비어있습니다.</div>
        )}
      </div>
    </>
  );
};

export default CardList;
