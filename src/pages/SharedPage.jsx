import React from 'react';
import SharedHeader from 'components/common/header/shared/SharedHeader';
import Search from 'components/common/main/Search';
import { MainContainer } from 'styles/MainContainer';
import CardGrid from 'components/common/main/CardGrid';

const MainPage = () => {
  return (
    <>
      <SharedHeader />
      <MainContainer>
        <Search />
        <CardGrid />
      </MainContainer>
    </>
  );
};

export default MainPage;
