import SearchLink from "components/common/Input/SearchLink/SearchLink";
import SharedCard from "./Card/SharedCard";
import { Share } from "constnats/types";
import * as S from "./SharedMainStyle";

interface Props {
  cardData: Share[];
}

const SharedMain = ({ cardData }: Props) => {
  return (
    <S.Container>
      <SearchLink />
      <S.Grid>
        <SharedCard cardData={cardData} />
      </S.Grid>
    </S.Container>
  );
};

export default SharedMain;
