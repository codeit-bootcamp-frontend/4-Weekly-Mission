import formatDate from '../utils/formatDate';
import diffTime from '../utils/diffTime';
import star from '../images/Icon_star.svg';
import styles from '../css/Card.module.css';

function LinkCard({item}) {
  return (
    <a href={item.url} target='_blank' rel='noreferrer'>
    <div className={styles.card} key={item.id}>
      <img className={styles.star} src={star} alt='star' />
      <div className={styles.previewImg} style={{ backgroundImage: `url(${item.imageSource})`}} />
      <div className={styles.linkContent}>
        <button className={styles.kebab} type='button' />
        <p className={styles.updateTime}>{diffTime(item.createdAt)}</p>
        <p className={styles.linkDescription}>{item.description}</p>
        <p className={styles.linkCreatedDate}>{formatDate(item.createdAt)}</p>
      </div>
    </div>
    </a>
  )
}

export default LinkCard;