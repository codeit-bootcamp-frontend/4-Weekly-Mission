/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import Layout from "../../Layout";
import AddLink from "./AddLink/index";
import NavButton from "./NavButton/index";
import Cards from "../../Cards";
import SearchingBar from "../../SearchingBar/index";
import useGetButttonList from "../../../hooks/useGetButtonList";
import useGetCardsInFolder from "../../../hooks/useGetCardsInFolder";
import "../../../styles/common.css";
import { divCss, btnCss, outerDivCss } from "./styles";

const FolderPage = () => {
  const [clickedButtonId, setClickedButtonId] = useState(null);
  const { buttonsId, buttonsTitle } = useGetButttonList();
  const { cardDetail } = useGetCardsInFolder(clickedButtonId);

  const handleClick = (e) => {
    console.log(e.target);
    setClickedButtonId(e.target.id);
  };

  return (
    <Layout
      children={[
        <AddLink />,
        <div css={divCss}>
          <SearchingBar />,
          <div css={btnCss}>
            {buttonsTitle.map((button, index) => (
              <NavButton
                title={button}
                key={buttonsId[index]}
                id={buttonsId[index]}
                onClick={(e) => handleClick(e)}
              />
            ))}
          </div>
          ,
        </div>,
        <div css={outerDivCss}>
          <Cards items={cardDetail} />
        </div>,
      ]}
    />
  );
};

export default FolderPage;
