import { useState, useEffect } from "react";
import { BASED_URL } from "../../../constnats/constant";
import SharedCard from "../../common/Card/Card";
import SearchLink from "../../common/Input/SearchLink/SearchLink";
import { updatedDate, updatedDuration } from "../../../utils/createdAt";
import * as S from "./SharedMainStyle";

const SharedMain = () => {
  const [cardData, setCardData] = useState([]);
  console.log(cardData);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch(`${BASED_URL}/sample/folder`);
        const responseData = await response.json();
        const fetchData = responseData.folder.links.map((link) => ({
          ...link,
          time: updatedDuration(link.createdAt),
          date: updatedDate(link.createdAt),
        }));
        setCardData(fetchData);
        console.log(fetchData);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchCardData();
  }, []);

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
