import React from 'react';
import Header from '../components/common/Header.tsx';
import Nav from '../components/shared/Nav.tsx';
import Cardlist from '../components/shared/Cardlist.tsx';
import Footer from '../components/common/Footer.tsx';

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
