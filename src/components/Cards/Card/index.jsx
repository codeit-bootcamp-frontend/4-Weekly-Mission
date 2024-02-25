/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./styles";
import { css } from "@emotion/react";
import { timeCalculator } from "../../../utils/timeCalculator";
import { formatDate } from "../../../utils/formatDate";
import kebab from "../../../assets/kebab.png";
import star from "../../../assets/star.svg";
import filledStar from "../../../assets/filledStar.svg";
import logo from "../../../assets/Linkbrary.png";
import "../../../styles/common.css";

const Card = ({ item }) => {
  const { createdAt, imageSource, description } = item;
  const createdDate = formatDate(createdAt);
  const timeFromCreated = timeCalculator(createdAt);
  const imgurl = imageSource;
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div css={styles.divCss}>
      <Link to="/newPage" css={styles.linkCss}>
        <div
          css={css`
            background-color: ${Boolean(imgurl) ? "#ffffff" : "#dddfff"};
            ${styles.imgWrapperCss};
          `}
        >
          <img
            src={logo}
            css={css`
              display: ${Boolean(imgurl) ? "none" : "inline"};
              ${styles.logoCss};
            `}
          />
          <img css={styles.imgCss} src={imgurl} />
        </div>

        <div css={styles.pWrapperCss}>
          <p css={styles.timeCss}>{timeFromCreated}</p>
          <div css={styles.commentWrapperCss}>
            <p css={styles.commentCss}>{description}</p>
          </div>
          <p css={styles.dateCss}>{createdDate}</p>
        </div>
      </Link>
      <img
        css={styles.starCss}
        src={isClicked ? filledStar : star}
        onClick={handleClick}
      />
      <img css={styles.kebabCss} src={kebab} alt="kebab" />
    </div>
  );
};

export default Card;
