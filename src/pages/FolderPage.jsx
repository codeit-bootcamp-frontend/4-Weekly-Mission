import AddLink from 'components/common/header/folder/AddLink';
import { HeaderContainer } from 'styles/HeaderContainer';
import React from 'react';
import { MainContainer } from 'styles/MainContainer';
import Search from 'components/common/main/Search';
import CardGrid from 'components/common/main/CardGrid';
import CardError from 'components/common/main/CardError';
import { useFolderQuery } from 'hook/useFetchData';
import { getFolderLink } from 'api/folderAPI';
import Category from 'components/folder/Category';

const FolderPage = () => {
  // const [currentCategory, setCurrentCategory] = useState('전체');
  const {
    data: folderDatas,
    isLoading,
    isError,
  } = useFolderQuery('folderDatas', getFolderLink);

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
        {/* <Category category={category} currentCategory={currentCategory} handleCategoryButton={handleCategoryButton} /> */}
        {folderDatas?.data.length ? (
          <CardGrid isLoading={isLoading} datas={folderDatas?.data} />
        ) : (
          <CardError />
        )}
      </MainContainer>
    </>
  );
};

export default FolderPage;
