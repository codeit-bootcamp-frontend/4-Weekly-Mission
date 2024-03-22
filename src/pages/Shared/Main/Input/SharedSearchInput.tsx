import { useEffect, useState } from "react";
import { CLOSE_BUTTON, SEARCH_ICON } from "constnats/image";
import { Share } from "constnats/types";
import * as S from "../../../Folder/Main/Input/SearchStyle";

interface Props {
  cardData: Share[];
  setSearchFilter: React.Dispatch<React.SetStateAction<Share[]>>;
}

const SearchLink = ({ cardData, setSearchFilter }: Props) => {
  const [search, setSearch] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const showSearchData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    setSearch(keyword);
    const filteredData = cardData.filter((card) => {
      return (
        card.url.includes(keyword) ||
        card.title.includes(keyword) ||
        card.description.includes(keyword)
      );
    });
    setSearchFilter(filteredData);
    setShowMessage(keyword.trim() !== "");
  };

  const resetSearchData = () => {
    setSearch("");
    setShowMessage(false);
    setSearchFilter(cardData);
  };

  useEffect(() => {
    setSearchFilter(cardData);
  }, [cardData, setSearchFilter]);

  return (
    <S.Container>
      <S.InputBox>
        <S.Image src={SEARCH_ICON} alt="search" />
        <S.Input
          placeholder="링크를 검색해 보세요"
          value={search}
          onChange={showSearchData}
        />
        <S.CloseIcon src={CLOSE_BUTTON} onClick={resetSearchData} alt="close" />
      </S.InputBox>
      {showMessage && (
        <S.Title>
          <S.Bold>{search}</S.Bold>으로 검색한 결과입니다.
        </S.Title>
      )}
    </S.Container>
  );
};

export default SearchLink;
