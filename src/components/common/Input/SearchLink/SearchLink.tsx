import { SEARCH_ICON } from "../../../../constnats/image";
import * as S from "./SearchLinkStyle";

const SearchLink = () => {
  return (
    <S.Container>
      <S.Image src={SEARCH_ICON} />
      <S.Input placeholder="링크를 검색해 보세요" />
    </S.Container>
  );
};

export default SearchLink;
