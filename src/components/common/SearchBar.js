import searchBar from '../../images/searchBar.svg';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <form>
      <img src={searchBar} alt="검색 돋보기 이미지" />
      <input placeholder="링크를 검색해 보세요." />
    </form>
  );
}
