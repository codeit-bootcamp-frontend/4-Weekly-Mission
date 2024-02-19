import Card from '../Card/Card';
import search from './images/search.svg';
import './Main.css';

export default function Main() {
  return (
    <main id="mainShared">
      <div className="searchBar">
        <img src={search} alt="돋보기 아이콘" />
        <p>링크를 검색해 보세요</p>
      </div>

      <div className="mainContent">
        <Card />
      </div>
    </main>
  );
}
