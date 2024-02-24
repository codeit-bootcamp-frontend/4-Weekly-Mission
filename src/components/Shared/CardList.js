import '../../assets/styles/CardList.css';

import CardItem from './CardItem';

const CardList = ({ links }) => {
  return (
    <>
      {links.length ? (
        <div className="card-list">
          <div className="card-list-container">
            {links.map((item) => (
              <CardItem key={item.id} link={item} />
            ))}
          </div>
        </div>
      ) : (
        <h1 className="fail-data">폴더 데이터를 가져오지 못했습니다.</h1>
      )}
    </>
  );
};
export default CardList;
