import './ContentsArea.css';
import searchIcon from '../assets/icon-search.svg';
import Card from '../components/Card';

const SearchBar = () => {
  return (
    <form className="search_link">
      <img src={searchIcon} alt="search" />
      <input
        type="text"
        className="input_box"
        placeholder="링크를 검색해 보세요."
      />
    </form>
  );
};

const ContentsArea = ({ links }) => {
  return (
    <div className="contents_area">
      <SearchBar></SearchBar>
      <div className="cards_area">
        {links.map((link) => {
          return <Card link={link} key={link.id}></Card>;
        })}
      </div>
    </div>
  );
};

export default ContentsArea;
