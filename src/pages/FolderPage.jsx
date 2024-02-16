import AddLink from 'components/common/header/folder/AddLink';
import { HeaderContainer } from 'styles/HeaderContainer';
import React from 'react';
import { MainContainer } from 'styles/MainContainer';
import Search from 'components/common/main/Search';
import CardGrid from 'components/common/main/CardGrid';

const FolderPage = () => {
  return (
    <>
      <HeaderContainer>
        <AddLink />
      </HeaderContainer>
      <MainContainer>
        <Search />
        <CardGrid />
      </MainContainer>
    </>
  );
};

export default FolderPage;
