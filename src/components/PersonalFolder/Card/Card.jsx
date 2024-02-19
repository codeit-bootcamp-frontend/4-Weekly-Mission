/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { useState } from "react";
import { css } from "@emotion/react";
import { timeCalculator } from "../../../utils/timeCalculator";
import { formatDate } from "../../../utils/formatDate";
import kebab from "../../../assets/kebab.png";
import star from "../../../assets/star.svg";
import filledStar from "../../../assets/filledStar.svg";
import logo from "../../../assets/Linkbrary.png";
import "../../../styles/common.css";

const Card = ({ item }) => {
  const createdDate = formatDate(item.createdAt || item.created_at);
  const timeFromCreated = timeCalculator(item.createdAt || item.created_at);
  const imgurl = item.imageSource || item.image_source;
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div css={divCss}>
      <Link to="/newPage" css={linkCss}>
        <div
          css={css`
            background-color: ${Boolean(imgurl) ? "#ffffff" : "#dddfff"};
            ${imgWrapperCss};
          `}
        >
          <img
            src={logo}
            css={css`
              display: ${Boolean(imgurl) ? "none" : "inline"};
              ${logoCss};
            `}
          />
          <img css={imgCss} src={imgurl} />
        </div>

        <div css={pWrapperCss}>
          <p css={timeCss}>{timeFromCreated}</p>
          <div css={commentWrapperCss}>
            <p css={commentCss}>{item.description}</p>
          </div>
          <p css={dateCss}>{createdDate}</p>
        </div>
      </Link>
      <img
        css={starCss}
        src={isClicked ? filledStar : star}
        onClick={handleClick}
      />
      <img css={kebabCss} src={kebab} alt="kebab" />
    </div>
  );
};

export default Card;

const linkCss = css`
  text-decoration: none;
`;
const divCss = css`
  width: 340px;
  height: 336px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
`;
const imgWrapperCss = css`
  width: 100%;
  height: 200px;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const logoCss = css`
  position: absolute;
  height: 24px;
  width: auto;
  opacity: 0.2;
`;
const imgCss = css`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px 16px 0 0;
  transition: width 0.4s ease, height 0.4s ease;
  object-fit: cover;

  &:hover {
    width: 130%;
    height: 130%;
  }
`;

const pWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 20px;
  height: 136px;
  background: #ffffff;

  &:hover {
    background: var(--Linkbrary-bg);
  }
`;
const timeCss = css`
  font-weight: 400px;
  font-size: 12px;
  color: #666666;
`;
const commentCss = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  overflow: hidden;

  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const commentWrapperCss = css`
  height: 48px;
  width: 100%;
  overflow: hidden;
`;
const dateCss = css`
  font-weight: 400;
  font-size: 12px;
  color: #333333;
`;

const starCss = css`
  position: relative;
  top: -320px;
  left: 296px;
`;
const kebabCss = css`
  position: relative;
  top: -136px;
  left: 272px;
`;
