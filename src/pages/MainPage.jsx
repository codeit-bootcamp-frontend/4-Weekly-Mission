import React from 'react';
import Header from '../components/common/header/Header';
import Search from '../components/main/Search';
import { MainContainer } from '../styles/MainContainer';
import CardGrid from '../components/main/CardGrid';

const MainPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Search />
        <CardGrid />
      </MainContainer>
    </>
  );
};

export default MainPage;
