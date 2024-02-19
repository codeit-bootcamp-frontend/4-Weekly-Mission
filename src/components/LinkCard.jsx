import style from '../styles/LinkCard.module.css';
import { dateParse, diffDate } from '../utils/date';
import noImg from '../assets/no-image-link.png';
import starDefault from '../assets/star-Default.svg';
import starSelected from '../assets/star-Selected.svg';
import kebabImg from '../assets/kebab.svg';

function LinkCard({ data }) {
  return (
    <div className={style.linkGridItem}>
      <a href={data?.url} target="_blank" rel="noreferrer">
        <div className={style.itemImg}>
          <img src={data?.imageSource || data?.image_source ? data?.imageSource || data?.image_source : noImg} alt="no-img" />
        </div>
        <div className={style.itemInfo}>
          <div className={style.flexBox}>
            <div className={style.dateDiff}>{diffDate(dateParse(data?.createdAt || data?.created_at))}</div>
            <div>
              <img src={kebabImg} alt="kebab" />
            </div>
          </div>
          <div className={style.itemContext}>{data?.title}</div>
          <div className={style.itemDate}>{dateParse(data?.createdAt || data?.created_at)}</div>
        </div>
      </a>
      <img className={style.starBtn} src={starDefault} alt="star" />
    </div>
  );
}

export default LinkCard;
