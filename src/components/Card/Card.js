import styles from "./Card.module.css";
import getElapsedTime from "../../util/getElapsedTime";
import LinkbraryLogo from "../../asset/images/logo.svg";

const Card = ({ createdAt, description, imageSource }) => {
  const elapsedTime = getElapsedTime(createdAt);

  return (
    <div className={styles.Card}>
      <div className={styles.thumb_box}>
        {imageSource ? (
          <img
            className={styles.thumb}
            src={imageSource}
            alt="링크 미리보기 이미지"
          />
        ) : (
          <div className={styles.noImage}>
            <img src={LinkbraryLogo} alt="링크 미리보기 이미지 없음" />
          </div>
        )}
      </div>
      <div className={styles.desc}>
        <span className={styles.desc_elapsedTime}>{elapsedTime}</span>
        <p className={styles.desc_text}>{description}</p>
        <span className={styles.desc_createdAt}>{createdAt.split("T", 1)}</span>
      </div>
    </div>
  );
};

export default Card;
