/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import LogoSvg from "./gnb/LogoSvg";
import Avatar from "./gnb/Avatar";
import "../../../styles/common.css";

const Header = () => {
  return (
    <div css={headerStyle}>
      <LogoSvg />
      <Avatar />
    </div>
  );
};
export default Header;

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 18px 32px;
  margin-bottom: 64px;
  margin-inline: auto;
  background: var(--Linkbrary-bg);

  @media screen and (375px <= width <= 767px) {
    width: min(100% - 64px, 400px);
  }
`;
