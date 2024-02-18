import search from './images/search.svg';
import './Main.css';

export default function MainDefault() {
  return (
    <main id="mainShared">
      <div className="searchBar">
        <img src={search} alt="돋보기 아이콘" />
        <p>링크를 검색해 보세요</p>
      </div>
      <div>
        <div id="mainDefaultArea">
          <p id="mainDefaultText">저장된 링크가 없습니다.</p>
        </div>
      </div>
    </main>
  );
}
