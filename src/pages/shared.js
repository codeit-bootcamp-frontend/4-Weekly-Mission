import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Cardlist from '../components/Cardlist';
import Footer from '../components/Footer';

const shared = () => {
  return (
    <>
      <Header />
      <Nav />
      <Cardlist />
      <Footer />
    </>
  );
};

export default shared;
