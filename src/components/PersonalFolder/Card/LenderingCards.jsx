/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import Cards from "./Cards";
import SearchingBar from "./SearchingBar.jsx";
import api from "../../../utils/api.js";
import "../../../styles/common.css";

const outerDivCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--Linkbrary-white);
  padding: 40px 0 0 0;
`;
const divCss = css`
  display: flex;
  justify-content: center;
  background: var(--Linkbrary-white);
`;
const LenderingCards = () => {
  const [items, setItems] = useState(null);

  const fetchData = async () => {
    try {
      const result = await api("sample/folder");
      setItems(result.folder.links);
      await console.log(items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div css={outerDivCss}>
      <SearchingBar />
      <div css={divCss}>
        <Cards items={items} />
      </div>
    </div>
  );
};

export default LenderingCards;
