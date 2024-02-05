import React from 'react';
import Header from '../components/sharedPageComponents/header';
import Contents from '../components/sharedPageComponents/contents';
import Footer from '../components/sharedPageComponents/footer';
import '../styles/shared.css';

export default function Main() {
  return (
    <>
      <Header></Header>
      <Contents></Contents>
      <Footer></Footer>
    </>
  );
}
