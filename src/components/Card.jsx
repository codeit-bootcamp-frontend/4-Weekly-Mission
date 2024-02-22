import { dateDiffCalc, dateFormatter } from "../util/datecalc";
import iconEmptyLogo from "../images/emptylogo.svg";
import kebab from "../images/kebab.svg";
import star from "../images/star.svg";
import styles from "./Card.module.css";
import SelectMenu from "./SelectMenu";
import { useState } from "react";

function Card({ link }) {
  const [isKebabClicked, setIsKebabClicked] = useState(false);
  const cardImage =
    link.imageSource || link["image_source"]
      ? link.imageSource || link["image_source"]
      : iconEmptyLogo;
  const dateOfCard = new Date(link.createdAt || link["created_at"]);
  const dateDiff = dateDiffCalc(dateOfCard);
  const formatDate = dateFormatter(dateOfCard);

  const onClickCard = () => {
    window.open(link.url, "_blank");
  };

  const onClickKebab = (e) => {
    e.stopPropagation();
    setIsKebabClicked((prevValue) => !prevValue);
  };

  return (
    <>
      <div className={styles.container} onClick={onClickCard}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={cardImage} alt="이미지"></img>
        </div>
        <img className={styles.star} src={star} alt="star" />
        <div className={styles.textContainer}>
          <div className={styles.dateDiffContainer}>
            <div>{dateDiff}</div>
            <div onClick={onClickKebab}>
              <img src={kebab} alt="kebab" />
            </div>
          </div>
          <div className={styles.description}>{link.description}</div>
          <div>{formatDate}</div>
        </div>
        {isKebabClicked ? <SelectMenu /> : null}
      </div>
    </>
  );
}

export default Card;
