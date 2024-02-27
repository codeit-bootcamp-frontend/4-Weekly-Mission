import s from "./Card.module.css";
import styled from "styled-components";

const FALLBACK_IMAGE = "https://picsum.photos/300";

const Card = (props) => {
  const {
    id,
    thumbnailSrc = FALLBACK_IMAGE,
    description,
    date,
    url,
    title,
    onTogglePopover,
    isPopoverVisible,
  } = props;

  return (
    <article className={s.cardWrapper}>
      <div className={s.thumbnail}>
        <img src={thumbnailSrc} alt={title} />
      </div>
      <div className={s.contents}>
        <header className={s.contentsHeader}>
          <span>10 min ago</span>
          <button onClick={() => onTogglePopover(id)}>...</button>
        </header>
        {isPopoverVisible && (
          <S.Popover>
            <button>공유</button>
            <button>수정</button>
            <button>삭제</button>
          </S.Popover>
        )}
        <div>{description}</div>

        <footer>{date}</footer>
      </div>
    </article>
  );
};

export default Card;

const S = {
  Popover: styled.div`
    position: absolute;
    top: 100%;
    right: 50%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: white;
    border: 1px solid #000;
    padding: 12px;
  `,
};
