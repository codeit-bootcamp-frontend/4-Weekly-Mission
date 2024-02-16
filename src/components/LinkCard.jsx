import style from '../styles/LinkCard.module.css';
import { dateParse, diffDate } from '../utils/date';
import noImg from '../assets/no-image-link.png';

function LinkCard({ data }) {
  return (
    <div className={style.linkGridItem}>
      <a href={data?.url} target="_blank" rel="noreferrer">
        <div className={style.itemImg}>
          <img src={data?.imageSource ? data?.imageSource : noImg} alt="no-img" />
        </div>
        <div className={style.itemInfo}>
          <div className={style.dateDiff}>{diffDate(dateParse(data?.createdAt))}</div>
          <div className={style.itemContext}>{data?.title}</div>
          <div className={style.itemDate}>{dateParse(data?.createdAt)}</div>
        </div>
      </a>
    </div>
  );
}

export default LinkCard;
