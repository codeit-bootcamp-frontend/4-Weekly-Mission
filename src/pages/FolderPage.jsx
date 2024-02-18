import AddLink from 'components/common/header/folder/AddLink';
import { HeaderContainer } from 'styles/HeaderContainer';
import React, { useState } from 'react';
import { MainContainer } from 'styles/MainContainer';
import Search from 'components/common/main/Search';
import CardGrid from 'components/common/main/CardGrid';
import CardError from 'components/common/main/CardError';
import { useCategoryQuery, useFolderQuery } from 'hook/useFetchData';
import Category from 'components/folder/Category';
import SubTitle from 'components/folder/SubTitle';

const FolderPage = () => {
  const [currentCategory, setCurrentCategory] = useState({
    id: 'all',
    name: '전체',
  });

  const folderId = currentCategory.id === 'all' ? '' : currentCategory.id;

  const {
    data: folderDatas,
    isLoading,
    isError,
  } = useFolderQuery({ queryKey: folderId, folderId: folderId });

  const { data: datas } = useCategoryQuery('category', 1);
  const categoryDatas = datas?.data && [
    { id: 'all', name: '전체' },
    ...datas?.data,
  ];

  const handleCategoryButton = e => {
    setCurrentCategory({ id: e.target.id, name: e.target.innerText });
  };

  if (isError) {
    return <CardError />;
  }
  return (
    <>
      <HeaderContainer>
        <AddLink />
      </HeaderContainer>
      <MainContainer>
        <Search />
        <Category
          categoryDatas={categoryDatas}
          currentCategory={currentCategory.name}
          handleCategoryButton={handleCategoryButton}
        />
        <SubTitle currentCategory={currentCategory.name} />
        {folderDatas?.data.length ? (
          <CardGrid
            isLoading={isLoading}
            datas={folderDatas?.data}
            isFolder="true"
          />
        ) : (
          <CardError />
        )}
      </MainContainer>
    </>
  );
};

export default FolderPage;
