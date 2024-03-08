import CardList from "./CardList/CardLIst";
import SearchLink from "../../common/Input/SearchLink/SearchLink";
import * as S from "./SharedMainStyle";

const SharedMain = () => {
  return (
    <S.Container>
      <SearchLink />
      <CardList />
    </S.Container>
  );
};

export default SharedMain;
