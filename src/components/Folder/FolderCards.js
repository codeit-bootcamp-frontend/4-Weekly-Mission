import React from 'react';
import Card from './Card';
import { NonLink } from '../../style/styledComponents';
import { Link } from 'react-router-dom';

export const FolderCards = ({ folder }) => {
  const isExistFolder = folder && folder.length > 0;
  return (
    <>
      <div className="cards-container cardlist">
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
          <NonLink>저장된 링크가 없습니다</NonLink>
        )}
      </div>
    </>
  );
};

export default FolderCards;
