import React from "react";
import searchIcon from "../../assets/Search.svg";
import "./LinkSearch.css";

function LinkSearch({ value, onChange, onReset, inputRef }: any) {
  return (
    <div className="LinkSearch">
      <div className="inputBox">
        <input
          className="linkSearchInput"
          value={value}
          onChange={onChange}
          placeholder="링크를 검색해 보세요."
          ref={inputRef}
        />
        <button className="searchBtn">
          <img src={searchIcon} alt="search" />
        </button>
        {value && (
          <img
            className="delete"
            src="https://weekly-mission-week9.vercel.app/images/close.svg"
            alt="delete"
            onClick={onReset}
          />
        )}
      </div>
      {value && (
        <h1 className="searchResultText">
          <span className="searchValue">{value}</span>으로 검색한 결과입니다.
        </h1>
      )}
    </div>
  );
}

export default LinkSearch;
