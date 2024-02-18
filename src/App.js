import titleLogo from './images/white.svg';
import search from './images/search.svg';
import Card from './components/Card/Card';

import './App.css';
import './shared.css';
import './components/Card/Card.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <section id="sectionShared">
        <div className="title">
          <div className="titleContent">
            <img className="titleLogo" src={titleLogo} alt="코드잇 로고" />
            <p>@코드잇</p>
          </div>
          <p className="bookmark">⭐즐겨찾기</p>
        </div>
      </section>
      <main id="mainShared">
        <div className="searchBar">
          <img src={search} alt="돋보기 아이콘" />
          <p>링크를 검색해 보세요</p>
        </div>

        <div className="mainContent">
          <Card />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
