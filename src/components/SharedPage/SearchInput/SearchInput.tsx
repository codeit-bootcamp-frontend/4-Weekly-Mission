import searchIcon from "assets/Search.png";
import styles from "./SearchInput.module.css";
import { ChangeEvent } from "react";


interface Props {
  loadingError: {
    message: string;
  }
  search: string;
  handleSearchChange: (e : ChangeEvent) => void;
}

const SearchInput = ({ loadingError, search, handleSearchChange } : Props) => {
  return (
    <>
      <div className={styles["wrapper"]}>
        <div className={styles["search-section"]}>
          <div className={styles["search-inputbox"]}>
            <img src={searchIcon} alt="검색 아이콘" />
            <input
              type="text"
              name="searchInput"
              value={search}
              placeholder="링크를 검색해 보세요."
              onChange={handleSearchChange}
            />
          </div>
        </div>
        {loadingError && <div>{loadingError.message}</div>}
      </div>
    </>
  );
};

export default SearchInput;
