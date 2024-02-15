import React, { useEffect, useState } from 'react';
import { SearchLink } from '../common/SearchLink';
import {
  TitleWrapper,
  CategoryWrapper,
  CategoryButton,
  FolderAddButton,
} from '../../styles/styledComponents/folderStyled';
import { categoryDataAPI } from '../../api/BootcampAPI';

/*eslint-disable */

export const FolderContents = () => {
  const [currentCategory, setCurrentCategory] = useState('전체');
  const [category, setCategory] = useState(null);
  useEffect(() => {
    const getCategory = async () => {
      const Data = await categoryDataAPI();
      setCategory([{ name: '전체', id: 0 }, ...Data]);
    };
    getCategory();
  }, []);
  const handleCategoryButton = (e) => {
    setCurrentCategory(e.target.innerText);
  };
  console.log(category);
  return (
    <article>
      <SearchLink></SearchLink>
      <TitleWrapper>
        <CategoryWrapper>
          {category &&
            category.map((categoryData) =>
              currentCategory === categoryData.name ? (
                <CategoryButton
                  key={categoryData.id}
                  checked
                  onClick={handleCategoryButton}
                >
                  {categoryData.name}
                </CategoryButton>
              ) : (
                <CategoryButton
                  key={categoryData.id}
                  onClick={handleCategoryButton}
                >
                  {categoryData.name}
                </CategoryButton>
              ),
            )}
        </CategoryWrapper>
        <FolderAddButton>폴더 추가</FolderAddButton>
      </TitleWrapper>
    </article>
  );
};
