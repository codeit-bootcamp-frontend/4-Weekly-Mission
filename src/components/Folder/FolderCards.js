import React from 'react';
import Card from './Card';
import { NonLink } from '../../style/styledComponents';

export const FolderCards = ({ folder }) => {
  return (
    <>
      <div className="content-wrapper">
        {folder && folder.length >= 1 ? (
          folder.map(
            (folderData, index) =>
              index !== 0 && (
                <Card
                  key={folderData.id}
                  imageSource={folderData.image_source}
                  createdAt={folderData.created_at}
                  description={folderData.description}
                  url={folderData.url}
                  folder
                />
              )
          )
        ) : (
          <NonLink>저장된 링크가 없습니다</NonLink>
        )}
      </div>
    </>
  );
};

export default FolderCards;
