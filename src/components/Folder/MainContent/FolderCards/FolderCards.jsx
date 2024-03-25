import React from 'react';
import Card from './Card/Card';
import { Link } from 'react-router-dom';
import styles from './FolderCards.module.scss';

export const FolderCards = ({ folder }) => {
  const isExistFolder = folder && folder.length > 0;

  return (
    <div className={`${styles.cardsContainer} ${styles.cardList}`}>
      {isExistFolder ? (
        folder.map(({ id, image_source, created_at, description, url }) => (
          <Link to={url} key={id}>
            <Card
              key={id}
              imageSource={image_source}
              createdAt={created_at}
              description={description}
              url={url}
              folder
            />
          </Link>
        ))
      ) : (
        <div className={styles.noLink}>저장된 링크가 없습니다</div>
      )}
    </div>
  );
};

export default FolderCards;
