import formatDate from '../utils/formatDate';
import diffTime from '../utils/diffTime';
import star from '../images/Icon_star.svg';
import styles from '../css/Card.module.css';

function LinkCard({item: {url, id, imageSource, createdAt, description}}) {
  return (
    <a href={url} target='_blank' rel='noreferrer'>
    <div className={styles.card} key={id}>
      <img className={styles.star} src={star} alt='star' />
      <div className={styles.previewImg} style={{ backgroundImage: `url(${imageSource})`}} />
      <div className={styles.linkContent}>
        <button className={styles.kebab} type='button' />
        <p className={styles.updateTime}>{diffTime(createdAt)}</p>
        <p className={styles.linkDescription}>{description}</p>
        <p className={styles.linkCreatedDate}>{formatDate(createdAt)}</p>
      </div>
    </div>
    </a>
  )
}

export default LinkCard;