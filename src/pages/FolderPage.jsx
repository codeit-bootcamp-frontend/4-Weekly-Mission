import AddLink from 'components/common/header/folder/AddLink';
import { HeaderContainer } from 'styles/HeaderContainer';
import React, { useState } from 'react';
import { MainContainer } from 'styles/MainContainer';
import Search from 'components/common/main/Search';
import { useCategoryQuery, useFolderQuery } from 'hook/useFetchData';
import CategoryContext from 'contexts/CategoryContext';
import CategoryTabList from 'components/folder/CategoryTabList';
import Loader from 'components/common/Loader';
import CardGrid from 'components/common/main/CardGrid';
import CardError from 'components/common/main/CardError';

const FolderPage = () => {
  const [currentCategory, setCurrentCategory] = useState({
    id: 'all',
    name: '전체',
  });

  const folderId = currentCategory.id === 'all' ? '' : currentCategory.id;

  const { data: folderDatas, isLoading } = useFolderQuery({
    queryKey: folderId,
    folderId: folderId,
  });

  const { data: datas } = useCategoryQuery('category', 1);
  const categoryDatas = datas?.data && [
    { id: 'all', name: '전체' },
    ...datas?.data,
  ];

  const handleCategoryButton = e => {
    setCurrentCategory({ id: e.target.id, name: e.target.innerText });
  };

  return (
    <CategoryContext.Provider value={datas}>
      <HeaderContainer>
        <AddLink />
      </HeaderContainer>
      <MainContainer>
        <Search />
        <CategoryTabList
          categoryDatas={categoryDatas}
          currentCategory={currentCategory.name}
          handleCategoryButton={handleCategoryButton}
          categoryId={folderId}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {folderDatas?.data.length ? (
              <CardGrid datas={folderDatas?.data} isFolder={true} />
            ) : (
              <CardError />
            )}
          </>
        )}
      </MainContainer>
    </CategoryContext.Provider>
  );
};

export default FolderPage;
