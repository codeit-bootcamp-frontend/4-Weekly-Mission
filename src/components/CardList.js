import styles from '../styles/CardList.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import Card from '../components/Card';

const CardList = ({ folderInfo, isIconVisible = false }) => {
  return (
    <div className={cn('cardlist')}>
      {folderInfo && folderInfo.length !== 0 ? (
        <>
          {folderInfo.map((card) => (
            <Card card={card} key={card.id} isIconVisible={isIconVisible} />
          ))}
        </>
      ) : (
        <div className={cn('none-link')}>저장된 링크가 없습니다.</div>
      )}
    </div>
  );
};

export default CardList;