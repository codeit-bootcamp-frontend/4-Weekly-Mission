import React, { useState } from 'react';
import SearchBar from '../../SearchBar/SearchBar';
import useFetchFolderCategoryData from '../../../hooks/useFetchFolderCategoryData';
import useFetchFolderCardsData from '../../../hooks/useFetchFolderCardsData';
import FolderCategory from './FolderCategory/FolderCategory';
import { FolderTitle } from './FolderTitle/FolderTitle';
import { FolderCards } from './FolderCards/FolderCards';

function MainContent() {
  const [currentCategory, setCurrentCategory] = useState('전체');

  const [folderId, setFolderId] = useState('0');

  const folderCategory = useFetchFolderCategoryData();

  const folderCards = useFetchFolderCardsData(folderId);

  const handleCategoryButton = (e) => {
    setCurrentCategory(e.target.innerText);
    setFolderId(e.target.id);
  };

  return (
    <>
      <SearchBar />
      {folderCategory ? (
        <>
          <FolderCategory
            category={[{ name: '전체', id: '0' }, ...folderCategory]}
            currentCategory={currentCategory}
            handleCategoryButton={handleCategoryButton}
          />
          <FolderTitle currentCategory={currentCategory} />
          {folderCards && <FolderCards folder={folderCards} />}
        </>
      ) : (
        <div>저장된 링크가 없습니다.</div>
      )}
    </>
  );
}

export default MainContent;
