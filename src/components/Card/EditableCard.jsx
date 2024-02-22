import styles from "./Card.module.css";
import getElapsedTime from "../../util/getElapsedTime";
import LinkbraryLogo from "../../asset/images/logo.svg";
import IconButton from "./IconButton";
import starIcon from "../../asset/images/star.svg";
import kebobIcon from "../../asset/images/kebab.svg";

const EditableCard = ({ createdAt, description, imageSource }) => {
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
      <IconButton
        iconSource={starIcon}
        iconAlt="즐겨찾기 아이콘"
        className={styles.icon_star}
        onClick={(e) => e.preventDefault()}
      />
      <IconButton
        iconSource={kebobIcon}
        iconAlt="더보기 아이콘"
        className={styles.icon_kebob}
        onClick={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default EditableCard;
