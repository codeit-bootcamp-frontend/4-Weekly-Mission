import SearchBarStyles from './SearchBar.module.css';
import SearchImg from '../../../assets/Search.svg';
import CloseImg from '../../../assets/close.png';

const SearchBar: React.FC = () => {
  return (
    <form className={SearchBarStyles.form}>
      <input
        className={SearchBarStyles.input}
        type="text"
        placeholder="링크를 검색해 보세요"
      />
      <img
        className={`${SearchBarStyles.img} ${SearchBarStyles.search}`}
        src={SearchImg}
        alt="돋보기 아이콘"
      />
      <img
        className={`${SearchBarStyles.img} ${SearchBarStyles.close}`}
        src={CloseImg}
        alt="닫기 아이콘"
      />
    </form>
  );
};

export default SearchBar;
