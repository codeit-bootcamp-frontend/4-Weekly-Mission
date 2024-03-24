import styles from "./SearchBar.module.scss";
import classNames from "classnames/bind";
import { SEARCH_IMAGE } from "./constant";
import { ChangeEvent, KeyboardEvent } from "react";

type SearchBarType = {
  setSearchValue?: (value: string) => void;
};

const cx = classNames.bind(styles);

export const SearchBar = ({ setSearchValue }: SearchBarType) => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      setSearchValue?.(event.target.value);
    }
  };

  return (
    <div className={cx("container")}>
      <input
        className={cx("input")}
        type="search"
        placeholder="링크를 검색해 보세요."
        onKeyDown={handleChange}
      />
      <img
        src={SEARCH_IMAGE}
        alt="검색창인 것을 알려주는 돋보기 아이콘"
        className={cx("icon")}
      />
    </div>
  );
};
