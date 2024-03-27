import styles from "./SearchBar.module.scss";
import classNames from "classnames/bind";
import { SEARCH_IMAGE } from "./constant";
import { useState } from "react";

const cx = classNames.bind(styles);

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  //serchValue가 입력값(추후지정)
  // 검색 입력값 초기화 핸들러
  const handleClearSearch = () => {
    // 검색 입력값을 빈 문자열로 업데이트
    setSearchValue("");
  };
  return (
    <div className={cx("container")}>
      <input
        className={cx("input")}
        type="search"
        placeholder="링크를 검색해 보세요."
      />
      <img
        src={SEARCH_IMAGE}
        alt="검색창인 것을 알려주는 돋보기 아이콘"
        className={cx("icon")}
      />
      {searchValue && (
        <button onClick={handleClearSearch} className={cx("clearButton")}>
          X
        </button>
      )}
    </div>
  );
};
