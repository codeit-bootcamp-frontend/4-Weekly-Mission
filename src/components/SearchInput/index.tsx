import {
  useState,
  useCallback,
  MouseEventHandler,
  useRef,
  RefObject,
} from "react";
import SearchIcon from "@assets/Search.png";
import styles from "./styles.module.css";
import { debounce } from "utils/debounce";
import { useSearch } from "@hooks/useSearch";
import { MdCancel } from "react-icons/md";

export default function SearchInput() {
  const [inputQuery, setInputQuery] = useState("");
  const search = useSearch();
  const ref = useRef(null);

  const debouncedOnSearch = useCallback(
    debounce((query: string) => {
      search.setQuery(query);
    }, 500),
    []
  );
  const handleCancleQuery = () => {
    setInputQuery("");
    search.setQuery("");
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInputQuery(query);
    debouncedOnSearch(query);
  };

  return (
    <div className={styles["searchBox"]}>
      <img style={{ flexShrink: 0 }} src={SearchIcon} alt="searchIcon" />
      <input
        ref={ref}
        type="text"
        name="search"
        value={inputQuery}
        placeholder="링크를 검색해 보세요."
        onChange={handleQueryChange}
      />
      {inputQuery && (
        <MdCancel
          onClick={handleCancleQuery}
          style={{ cursor: "pointer" }}
          color="#CCD5E3"
          size={20}
        />
      )}
    </div>
  );
}
