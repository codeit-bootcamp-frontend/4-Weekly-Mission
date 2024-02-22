import React, { useState } from 'react';
import { SearchLink } from '../common/SearchLink';
import { FolderCategory } from './FolderCategory';
import { FolderTitle } from './FolderTitle';
import { FolderCard } from './FolderCard';
import { useAPIData } from '../../hooks/useAPIData';
import { categoryDataAPI, categoryFolderDataAPI } from '../../api/BootcampAPI';
import { NonLink } from '../../styles/styledComponents/folderStyled';
export const FolderContents = () => {
  const [currentCategory, setCurrentCategory] = useState('전체');

  const { data: category } = useAPIData(categoryDataAPI);
  const { data: folder, handleData: setFolder } = useAPIData(
    categoryFolderDataAPI,
    '0',
  );

  const handleCategoryButton = (e) => {
    setCurrentCategory(e.target.innerText);
    setFolder(e.target.id);
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
          <FolderTitle currentCategory={currentCategory}></FolderTitle>
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
