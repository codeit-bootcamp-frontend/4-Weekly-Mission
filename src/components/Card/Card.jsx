import ReactTimeago from 'react-timeago';
import dayjs from 'dayjs';
import { BsThreeDots } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { UNDEFINED_IMAGE } from '../../constant/constant';
import ToggleButton from '../ToggleButton/ToggleButton';
import styles from './Card.module.scss';

const Card = ({ createdAt, url, title, imageURL }) => {
  const createdDay = dayjs(createdAt).format('YYYY-MM-DD');
  return (
    <article className={styles.layout}>
      <a href={url} target='_blank' rel='noreferrer noopener'>
        <div className={styles.imageBox}>
          <img className={styles.image} src={imageURL || UNDEFINED_IMAGE} alt={title} />
        </div>
        <FaStar className={styles.starIcon} />
        <div className={styles.textBox}>
          <div className={styles.timeBox}>
            <ReactTimeago className={styles.timeAgo} date={createdAt} locale='ko' />
            <ToggleButton className={styles.toggleButton} items={['삭제하기', '폴더에 추가']}>
              <BsThreeDots className={styles.kebabIcon} />
            </ToggleButton>
          </div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.date}> {createdDay} </p>
        </div>
      </a>
    </article>
  );
};

export default Card;
