import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Cardlist from '../components/Cardlist';
import Footer from '../components/Footer';

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
