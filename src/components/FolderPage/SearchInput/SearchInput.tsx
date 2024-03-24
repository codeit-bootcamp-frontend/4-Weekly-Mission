import searchIcon from "assets/Search.png";
import styles from "./SearchInput.module.css";
import { ChangeEvent } from "react";
import close from "assets/close.png";

interface Props {
  loadingError: {
    message: string;
  }
  search: string;
  handleSearchChange: (e: ChangeEvent) => void;
  handleCloseClick: (e: React.MouseEvent) => void;
}

const SearchInput = ({ loadingError, search, handleSearchChange, handleCloseClick }: Props) => {
  console.log(search)

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
                <button className={styles.closeBtn} onClick={handleCloseClick}>
          <img src={close} alt="닫힘버튼" />
        </button>
      </div>
    </>
  );
};

export default SearchInput;
