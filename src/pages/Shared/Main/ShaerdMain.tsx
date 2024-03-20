import SharedCard from "./Card/SharedCard";
import SearchLink from "../../../components/common/Input/SearchLink/SearchLink";
import * as S from "./SharedMainStyle";
import { Link } from "constnats/types";

interface Props {
  cardData: Link[];
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
