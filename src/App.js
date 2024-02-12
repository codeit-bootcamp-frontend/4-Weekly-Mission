import logo from './images/logo.png';
import titleLogo from './images/shared/white.svg';
import facebook from './images/akar-icons_facebook-fill.svg';
import twitter from './images/akar-icons_twitter-fill.svg';
import youtube from './images/akar-icons_youtube-fill.svg';
import instagram from './images/ant-design_instagram-filled.svg';
import search from './images/shared/search.svg';
import card1 from './images/shared/card/1.png';
import card2 from './images/shared/card/2.png';
import card3 from './images/shared/card/3.png';
import card4 from './images/shared/card/4.png';
import card5 from './images/shared/card/5.png';
import card6 from './images/shared/card/6.png';
import card7 from './images/shared/card/7.png';
import card8 from './images/shared/card/8.png';
import card9 from './images/shared/card/9.png';

import './App.css';
import { useState } from 'react';
import './style/shared.css';

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
          {async function login(body) {
            try {
              const result = await fetch('https://bootcamp-api.codeit.kr/api/sample/user', {
                method: 'POST',
                headers: { 'content-Type': 'application/json' },
                body: JSON.stringify({ body }),
              });
              if (!result.ok) {
                <button>로그인</button>;
              } else {
                console.log(result.status);
              }
            } catch (error) {
              console.error(error);
            }
          }}
        </div>
      </header>
      <section>
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <img key={num} src={`card${num}`} alt={`${num}번 카드`} />
          ))}
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
