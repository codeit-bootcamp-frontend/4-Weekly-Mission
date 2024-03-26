import searchIcon from "../../assets/Search.svg";
import css from "./LinkSearch.module.scss";

function LinkSearch({ value, onChange, onReset, inputRef }: any) {
  return (
    <div className={css.LinkSearch}>
      <div className={css.inputBox}>
        <input
          className={css.linkSearchInput}
          value={value}
          onChange={onChange}
          placeholder="링크를 검색해 보세요."
          ref={inputRef}
        />
        <button className={css.searchBtn}>
          <img src={searchIcon} alt="search" />
        </button>
        {value && (
          <img
            className={css.delete}
            src="https://weekly-mission-week9.vercel.app/images/close.svg"
            alt="delete"
            onClick={onReset}
          />
        )}
      </div>
      {value && (
        <h1 className={css.searchResultText}>
          <span className="searchValue">{value}</span>으로 검색한 결과입니다.
        </h1>
      )}
    </div>
  );
}

export default LinkSearch;
