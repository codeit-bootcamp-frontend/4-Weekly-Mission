import { useState } from "react";
import styles from "./card.module.css";
import { formatDate, getTimeDifference } from "utils/helpers/dateUtils";

import noImage from "assets/images/bg_noImage.png";
import meatballsIcon from "assets/images/ic_meatballs.svg";
import starIcon from "assets/images/ic_star.svg";

function Card({ item, onClick }) {
  const { createdAt, created_at, description, imageSource, image_source } =
    item;
  const cardCreatedAt = createdAt || created_at;
  const cardimageSource = imageSource || image_source;
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.imgWrapper}>
        <img
          src={cardimageSource ? cardimageSource : noImage}
          onError={(e) => {
            e.target.src = noImage;
          }}
          className={styles.image}
        />
        <img
          src={starIcon}
          className={styles.star}
          onClick={(e) => {
            e.stopPropagation();
            console.log("click");
          }}
          alt="별모양 아이콘"
        />
      </div>

      <div className={styles.info}>
        <div className={styles.infoTop}>
          <div className={styles.difference}>
            {getTimeDifference(cardCreatedAt)}
          </div>
          <div className={styles.menu}>
            <button onClick={handleMenuClick} className={styles.menuBtn}>
              <img src={meatballsIcon} alt="메뉴 아이콘" />
            </button>
            {isMenuOpen && (
              <div className={styles.options}>
                <button className={styles.option}>삭제하기</button>
                <button className={styles.option}>폴더에 추가</button>
              </div>
            )}
          </div>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.date}>{formatDate(cardCreatedAt)}</div>
      </div>
    </div>
  );
}

export default Card;
