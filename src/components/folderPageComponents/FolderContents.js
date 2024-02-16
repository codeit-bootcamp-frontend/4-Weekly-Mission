import React from 'react';
import { SearchLink } from '../common/SearchLink';
import { useCategoryData } from '../../hooks/useCategoryData';
import { FolderCategory } from './FolderCategory';
import { FolderTitle } from './FolderTitle';
import { FolderCard } from './FolderCard';

/*eslint-disable */

export const FolderContents = () => {
  const { category, currentCategory, handleCategoryButton, folder } =
    useCategoryData();

  return (
    <article>
      <SearchLink></SearchLink>
      <FolderCategory
        category={category}
        handleCategoryButton={handleCategoryButton}
        currentCategory={currentCategory}
      ></FolderCategory>
      <FolderTitle currentCategory={currentCategory}></FolderTitle>
      <FolderCard folder={folder}></FolderCard>
    </article>
  );
};
