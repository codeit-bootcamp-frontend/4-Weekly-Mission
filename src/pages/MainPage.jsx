import React from 'react';
import GNB from '../components/common/layout/header/GNB';
import Header from '../components/common/layout/header/Header';
import Search from '../components/main/Search';
import { MainContainer } from '../styles/MainContainer';
import Footer from '../components/common/layout/footer/Footer';
import CardGrid from '../components/main/CardGrid';

const MainPage = () => {
  return (
    <>
      <GNB />
      <Header />
      <MainContainer>
        <Search />
        <CardGrid />
      </MainContainer>
      <Footer />
    </>
  );
};

export default MainPage;
