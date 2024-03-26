import searchIcon from "assests/img/searchIcon.png";
import * as S from "./SearchInput.styled";
import { useState } from "react";
import { Links } from "typeStore";

interface Props {
  folderData: any;
  setData: any;
  setLength: any;
}

const SearchInput: React.FC<Props> = ({ folderData, setData, setLength }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setLength(e.target.value.length);
    if (inputValue) {
      const filterData = folderData.filter((link: Links) => {
        const valid = new RegExp(inputValue, "ig");
        return (
          valid.test(link.description) ||
          valid.test(link.title) ||
          valid.test(link.url)
        );
      });
      setData(filterData);
    } else {
      setData(folderData);
    }
  };

  return (
    <S.SearchBox>
      <S.SearchIcon src={searchIcon} alt="검색 아이콘" />
      <S.Wrap>
        <S.Input
          type="text"
          value={inputValue}
          onChange={onChangeEvent}
          placeholder="링크를 검색해 보세요."
        />
      </S.Wrap>
    </S.SearchBox>
  );
};

export default SearchInput;
