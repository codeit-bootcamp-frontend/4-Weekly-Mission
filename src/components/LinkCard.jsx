import formatDate from '../utils/formatDate';
import diffTime from '../utils/diffTime';
import star from '../images/Icon_star.svg';
import styles from '../css/Card.module.css';
import Popover from './Popover';
import { useState } from 'react';

function LinkCard({item: {url, id, imageSource, createdAt, description}}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(isOpen ? false: true);
  }

  return (
    <a href={url} target='_blank' rel='noreferrer'>
    <div className={styles.card} key={id}>
      <img className={styles.star} src={star} alt='star' />
      <div className={styles.previewImg} style={{ backgroundImage: `url(${imageSource})`}} />
      <div className={styles.linkContent}>
        <button type='button' className={styles.kebab} onClick={handleClick} />
        <Popover isOpen={ isOpen } url={url} />
        <p className={styles.updateTime}>{diffTime(createdAt)}</p>
        <p className={styles.linkDescription}>{description}</p>
        <p className={styles.linkCreatedDate}>{formatDate(createdAt)}</p>
      </div>
    </div>
    </a>
  )
}

export default LinkCard;