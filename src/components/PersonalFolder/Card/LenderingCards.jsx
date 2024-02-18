/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import Cards from "./Cards";
import SearchingBar from "./SearchingBar.jsx";
import api from "../../../utils/api.js";
import "../../../styles/common.css";

const LenderingCards = () => {
  const [cardDetail, setCardDetail] = useState(null);

  const fetchData = async () => {
    try {
      throw Error("메롱");
      const result = await api("sample/folder");
      setCardDetail(result.folder.links);
    } catch (error) {
      setCardDetail(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div css={outerDivCss}>
      <SearchingBar />
      <Cards items={cardDetail} />
    </div>
  );
};

export default LenderingCards;

const outerDivCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--Linkbrary-white);
  padding: 40px 0 0 0;
`;
