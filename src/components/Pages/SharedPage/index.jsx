/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Layout from "../../Layout/index.jsx";
import Profile from "./Profile/index";
import SearchingBar from "../../SearchingBar/index.jsx";
import Cards from "../../Cards/index";
import useGetCardInShared from "../../../hooks/useGetCardsInShared.js";
import { divCss } from "./styles.js";

const SharedPage = () => {
  const { cardDetail } = useGetCardInShared();

  return (
    <Layout
      children={[
        <Profile />,
        <div css={divCss}>
          <SearchingBar />,
          <Cards items={cardDetail} />
        </div>,
      ]}
    />
  );
};
export default SharedPage;
