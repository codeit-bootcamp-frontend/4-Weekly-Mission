import searchImg from "../../images/search.svg";
import clearIcon from "../../images/clear.svg";
import { ClearIcon, LinkSearchInputWrapper, SearchIcon } from "./style";
import { useState } from "react";

const LinkSearchInput = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClick = () => {
    setSearchValue("");
  };

  return (
    <LinkSearchInputWrapper>
      <SearchIcon src={searchImg} alt="검색 이미지" />
      <input
        placeholder="링크를 검색해 보세요"
        value={searchValue}
        onChange={handleChange}
      />
      <ClearIcon src={clearIcon} alt="내용 지우기" onClick={handleClick} />
    </LinkSearchInputWrapper>
  );
};

export default LinkSearchInput;
