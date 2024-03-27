import styles from "./SearchResult.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
interface input {
  searchInput: string;
}
export const SearchResult = ({ searchInput }: input) => {
  return (
    searchInput !== "" && (
      <div className={cx("container")}>
        <span>{searchInput}</span> 으로 검색한 결과입니다.
      </div>
    )
  );
};
