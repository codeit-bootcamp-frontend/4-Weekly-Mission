/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
} from "./footer_Icons/Icons.js";
import "../../../styles/common.css";

const divStyle = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 160px;
  padding: 32px 64px;
  background: var(--Linkbrary-black);
  margin: 0;
`;
const pStyle = css`
  order: 1;
  margin: 0;
  color: #676767;
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (375px <= width <= 767px) {
    order: 3;
    width: 100%;
    margin-top: 60px;
  }
`;
const aWrapperStyle = css`
  order: 2;
  display: flex;
  gap: 30px;

  @media screen and (375px <= width <= 767px) {
    order: 1;
  }
`;
const aStyle = css`
  margin: 0;
  text-decoration: none;
  color: #cfcfcf;
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const iconsStyle = css`
  order: 3;
  display: flex;
  gap: 12px;
  margin: 0;

  @media screen and (375px <= width <= 767px) {
    order: 2;
  }
`;

const Footer = () => {
  return (
    <div css={divStyle}>
      <section css={pStyle}>
        <p>@codeit - 2023</p>
      </section>

      <section css={aWrapperStyle}>
        <a href="/policy" css={aStyle}>
          Privacy Policy
        </a>
        <a href="/faq" css={aStyle}>
          FAQ
        </a>
      </section>

      <section css={iconsStyle}>
        <FacebookIcon />
        <TwitterIcon />
        <YoutubeIcon />
        <InstagramIcon />
      </section>
    </div>
  );
};
export default Footer;
