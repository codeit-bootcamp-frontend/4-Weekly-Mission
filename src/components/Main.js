import Header from './Header';
import Share from './main/Share';
import Footer from './Footer';
import '../css/Reset.css';
import '../css/Global.css';
import '../css/Main.css';

// 메인 : 헤더-내용-푸터 구조
function Main(){
  return(
    <>
      <header><Header/></header>
      <main><Share/></main>
      <footer><Footer/></footer>
    </>
  );
}

export default Main;