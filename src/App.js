import logo from './images/logo.png';
import titleLogo from './images/shared/white.svg';
import facebook from './images/akar-icons_facebook-fill.svg';
import twitter from './images/akar-icons_twitter-fill.svg';
import youtube from './images/akar-icons_youtube-fill.svg';
import instagram from './images/ant-design_instagram-filled.svg';
import search from './images/shared/search.svg';
import Card from './js/Card';

import './App.css';
import './style/shared.css';
import './style/card.css';

function App() {
  return (
    <div>
      <header>
        <div className="headerLogo">
          <a href="/">
            <img className="logo" src={logo} alt="Linkbrary로고" />
          </a>
        </div>
        <div className="headerBtn">
          <button>로그인</button>
        </div>
      </header>
      <section className="sectionShared">
        <div className="title">
          <div className="titleContent">
            <img className="titleLogo" src={titleLogo} alt="코드잇 로고" />
            <p>@코드잇</p>
          </div>
          <p className="bookmark">⭐즐겨찾기</p>
        </div>
      </section>
      <main>
        <div className="searchBar">
          <img src={search} alt="돋보기 아이콘" />
          <p>링크를 검색해 보세요</p>
        </div>

        <div className="mainContent">
          <Card num={1} />
          <Card num={2} />
          <Card num={3} />
          <Card num={4} />
          <Card num={5} />
          <Card num={6} />
          <Card num={7} />
          <Card num={8} />
          <Card num={9} />
        </div>
      </main>
      <footer>
        <div className="footer1">
          <p>©codeit - 2023</p>
        </div>
        <div className="footer2">
          <a href="/privacy">
            <p>Privacy Policy</p>
          </a>
          <a href="/faq">
            <p>FAQ</p>
          </a>
        </div>
        <div className="footer3">
          <img src={facebook} alt="페이스북 로고" />
          <img src={twitter} alt="트위터 로고" />
          <img src={youtube} alt="유튜브 로고" />
          <img src={instagram} alt="인스타그램 로고" />
        </div>
      </footer>
    </div>
  );
}

export default App;
