import React, { useState, useContext } from 'react';
import { SearchLink } from '../common/SearchLink';
import { FolderCategory } from './FolderCategory';
import { FolderTitle } from './FolderTitle';
import { FolderCard } from './FolderCard';
import { NonLink } from '../../styles/styledComponents/folderStyled';
import { FolderPageContext } from '../../context/FolderPageContext';
/* eslint-disable */
export const FolderContents = () => {
  const [currentCategory, setCurrentCategory] = useState('전체');
  const [currentFolderID, setCurrentFolderID] = useState('0');
  const { category, folder, setFolder } = useContext(FolderPageContext);

  const handleCategoryButton = (e) => {
    setCurrentCategory(e.target.innerText);
    setFolder(e.target.id);
    setCurrentFolderID(e.target.id);
  };
  return (
    <article>
      <SearchLink></SearchLink>
      {category ? (
        <>
          <FolderCategory
            category={[{ name: '전체', id: '0' }, ...category]}
            handleCategoryButton={handleCategoryButton}
            currentCategory={currentCategory}
          ></FolderCategory>
          <FolderTitle
            currentCategory={currentCategory}
            folderID={currentFolderID}
          ></FolderTitle>
          {folder && <FolderCard folder={folder}></FolderCard>}
        </>
      ) : (
        <div className="content-wrapper">
          <NonLink>저장된 링크가 없습니다.</NonLink>
        </div>
      )}
    </article>
  );
};
