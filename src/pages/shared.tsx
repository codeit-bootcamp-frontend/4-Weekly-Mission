import React from 'react';
import Header from '../components/common/Header';
import Nav from '../components/shared/Nav';
import Cardlist from '../components/shared/Cardlist';
import Footer from '../components/common/Footer';

const Shared = () => {
  return (
    <>
      <Header />
      <Nav />
      <Cardlist />
      <Footer />
    </>
  );
};

export default Shared;
