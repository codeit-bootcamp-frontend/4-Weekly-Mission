import * as S from './SearchBar.style';
import searchImg from '../../../assets/shared/Search.svg';

function SearchBar() {
  return (
    <S.SearchBarContainer>
      <img className="icon" src={searchImg} alt="돋보기 아이콘" />
      <input className="search-bar" type="text" placeholder="링크를 검색해 보세요."></input>
    </S.SearchBarContainer>
  );
}

export default SearchBar;
