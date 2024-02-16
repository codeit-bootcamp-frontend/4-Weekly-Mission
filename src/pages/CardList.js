import '../styles/CardList.css';
import Card from './Card';

const CardList = () => {
  // const cardList // 받아올 예정.

  return (
    <>
      <div className='cardlist'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* {cardList ? (
        <>
          {cardList.map((cardlist) => (
            <Card cardlist={cardlist} key={cardlist.id} />
          ))}
        </>
      ) : (
        <div>폴더가 비어있습니다.</div>
      )}*/}
      </div>
    </>
  );
};

export default CardList;
