/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import Cards from "./Cards";
import SearchingBar from "./SearchingBar.jsx";
import api from "../../../utils/api.js";
import "../../../styles/common.css";

const LenderingCards = (props) => {
  const { linkExist, linkNotExist, query, objKey } = props;
  const [cardDetail, setCardDetail] = useState(null);

  const fetchData = async () => {
    try {
      const result = await api(query);
      let currentObj = result;
      for (const key of objKey) {
        if (currentObj[key] !== undefined) {
          currentObj = currentObj[key];
        } else {
          currentObj = null;
          break;
        }
      }

      setCardDetail(currentObj);
      linkExist();
    } catch (error) {
      setCardDetail(null);
      linkNotExist();
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

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
