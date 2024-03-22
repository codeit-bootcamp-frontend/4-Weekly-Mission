import { useState } from "react";
import SearchLink from "./Input/SharedSearchInput";
import SharedCard from "./Card/SharedCard";
import { Share } from "constnats/types";
import * as S from "./SharedMainStyle";

interface Props {
  cardData: Share[];
}

const SharedMain = ({ cardData }: Props) => {
  const [searchFilter, setSearchFilter] = useState<Share[]>(cardData);

  return (
    <S.Container>
      <SearchLink cardData={cardData} setSearchFilter={setSearchFilter} />
      <S.Grid>
        <SharedCard cardData={searchFilter} />
      </S.Grid>
    </S.Container>
  );
};

export default SharedMain;
