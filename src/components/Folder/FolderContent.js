import React, { useState } from 'react';
import Searchbar from '../Searchbar';
import useFetchFolderCategoryData from '../../hooks/useFetchFolderCategoryData';
import useFetchFolderCardsData from '../../hooks/useFetchFolderCardsData';
import FolderCategory from './FolderCategory';
import { FolderTitle } from './FolderTitle';
import { FolderCards } from './FolderCards';

function FolderContent() {
  const folderCategory = useFetchFolderCategoryData();

  const folderCards = useFetchFolderCardsData(0);

  const [currentCategory, setCurrentCategory] = useState('전체');

  const handleCategoryButton = (e) => {
    setCurrentCategory(e.target.innerText);
  };

  return (
    <>
      <Searchbar />
      {folderCategory ? (
        <>
          <FolderCategory
            category={[{ name: '전체', id: '0' }, ...folderCategory]}
            currentCategory={currentCategory}
            handleCategoryButton={handleCategoryButton}
          ></FolderCategory>
          <FolderTitle currentCategory={currentCategory}></FolderTitle>
          {folderCards && <FolderCards folder={folderCards}></FolderCards>}
        </>
      ) : (
        <div className="content-wrapper">저장된 링크가 없습니다.</div>
      )}
    </>
  );
}

export default FolderContent;
