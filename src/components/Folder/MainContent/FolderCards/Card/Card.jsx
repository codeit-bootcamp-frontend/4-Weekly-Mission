import React from 'react';
import defaultImg from '../../../../../images/no-image.svg';
import starImg from '../../../../../images/star.svg';
import kebabImg from '../../../../../images/kebab.svg';
import { updateStatus } from '../../../../../utils/cardUpdate';
import styles from './Card.module.scss';

export default function Card({ imageSource, createdAt, description, folder }) {
  const date = new Date(createdAt).toLocaleDateString();

  const dataStatus = updateStatus(createdAt);

  return (
    <div className={styles.card}>
      <img
        src={imageSource ? imageSource : defaultImg}
        className={styles.cardImg}
        alt="card"
      />
      {folder && <img src={starImg} alt="star" width={34} height={34} />}
      <div className={styles.textContainer}>
        <span>{createdAt ? dataStatus : null}</span>
        <p>{description}</p>
        <p className={styles.dateNumber}>{date}</p>
        {folder && <img src={kebabImg} alt="star" width={21} height={17} />}
      </div>
    </div>
  );
}
