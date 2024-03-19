import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import EmptyCase from "../../../assets/svg/CardImageEmptyCase";

export default function Card({ link }) {
  const { imageSource, createdAt, description, title, url } = link;

  return (
    <Link to={url} className={styles.Card}>
      {imageSource ? (
        <figure className={styles.imgBox}>
          <img className={styles.img} src={imageSource} alt={title} />
        </figure>
      ) : (
        <figure className={styles.emptyCaseBox}>
          <EmptyCase className={styles.emptyCase} />
        </figure>
      )}
      <figcaption className={styles.caption}>
        <time className={styles.updatedAt}>{createdAt}</time>
        <p className={styles.description}>{description}</p>
        <time className={styles.createdAt}>{createdAt}</time>
      </figcaption>
    </Link>
  );
}
