import SharedCard from "../../common/Card/Card";
import SearchLink from "../../common/Input/SearchLink/SearchLink";
import * as S from "./SharedMainStyle";

const SharedMain = () => {
  return (
    <S.Container>
      <SearchLink />
      <S.Grid>
        <SharedCard />
      </S.Grid>
    </S.Container>
  );
};

export default SharedMain;
