import '../styles/CardList.css';
import React from 'react';

import Card from './Card';

interface Props {
  folderLink: any;
  folderInfo: any;
  isIconVisible: boolean;
}

const CardList = ({ folderLink, folderInfo, isIconVisible }: Props) => {
  const card = folderInfo?.folder.links;

  return (
    <>
      <div className='cardlist'>
        {card && card.length !== 0 ? (
          <>
            {card.map((card: any) => (
              <Card card={card} key={card.id} isIconVisible={isIconVisible} />
            ))}
          </>
        ) : (
          <div className='none-link'>저장된 링크가 없습니다.</div>
        )}
      </div>
    </>
  );
};

export default CardList;
