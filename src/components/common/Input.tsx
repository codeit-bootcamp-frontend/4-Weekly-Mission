import searchIcon from "../../assets/icons/icon_search.png";

const Input = () => {
  return (
    <div id="search-bar">
      <img src={searchIcon} alt="searchIcon"></img>
      <input type="text" placeholder="링크를 검색해 보세요." />
    </div>
  );
};

export default Input;
