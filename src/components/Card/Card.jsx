import s from "./Card.module.css";

const FALLBACK_IMAGE = "https://picsum.photos/300";

const Card = (props) => {
  const {
    id,
    thumbnailSrc = FALLBACK_IMAGE,
    description,
    date,
    url,
    title,
  } = props;

  return (
    <article className={s.cardWrapper}>
      <div className={s.thumbnail}>
        <img src={thumbnailSrc} alt={title} />
      </div>
      <div className={s.contents}>
        <header className={s.contentsHeader}>
          <span>10 min ago</span>
          <button>...</button>
        </header>
        <div>{description}</div>

        <footer>{date}</footer>
      </div>
    </article>
  );
};

export default Card;
