import styles from "./css/Card.module.css";

const SAMPLE_IMAGE_URL = "images/sample_image.svg";

const Card = ({ cardImage = SAMPLE_IMAGE_URL, cardTime, cardDescription }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.card_image_container}>
        <img src={cardImage} alt="card profile" className={styles.card_image} />
      </div>
      <div className={styles.card_txt}>
        <div className="font-thin font-13px" style={{ color: "#666666" }}>
          {cardTime["timeDifference"]}
        </div>
        <div className={`${styles.card_contents} font-thin font-16px`}>
          {cardDescription}
        </div>
        <div className=" font-thin font-14px" style={{ color: "#333333" }}>
          {cardTime["createdDate"]}
        </div>
      </div>
    </div>
  );
};

export default Card;
