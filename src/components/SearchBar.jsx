import Search from "../images/Search.svg";
// import "./css/Main.css";
import style from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        <img src={Search} alt="Search" />
        <input
          className={style.input}
          type="text"
          placeholder="링크를 검색해 보세요"
        />
      </div>
    </div>
  );
}

export default SearchBar;
