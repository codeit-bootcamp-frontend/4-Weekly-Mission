import {Fragment} from 'react';
import Header from './Header';
import Shared from './Shared';
import Footer from './Footer';
import '../css/Main.css';

// 메인 : 헤더-내용-푸터 구조
function Main(){
  return(
    <>
      <header><Header/></header>
      <main><Shared/></main>
      <footer><Footer/></footer>
    </>
  );
}

export default Main;