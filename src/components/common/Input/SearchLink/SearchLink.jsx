import { SEARCH_ICON } from "../../../../constnats/image";
import { SEARCH_LINK_PLACEHOLDER } from "../../../../constnats/constant";
import * as S from "./SearchLinkStyle";

const SearchLink = () => {
  return (
    <S.Container>
      <S.Image src={SEARCH_ICON} />
      <S.Input placeholder={SEARCH_LINK_PLACEHOLDER} />
    </S.Container>
  );
};

export default SearchLink;
