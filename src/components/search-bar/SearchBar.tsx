import * as S from './SearchBar.style';
import SearchImg from '../../assets/icons/Search.svg';

const SearchBar = () => {
  return (
    <S.SearchBarContainer>
      <img className="icon" src={SearchImg} alt="돋보기 아이콘" />
      <input className="search-bar" type="text" placeholder="링크를 검색해 보세요." />
    </S.SearchBarContainer>
  );
};

export default SearchBar;
