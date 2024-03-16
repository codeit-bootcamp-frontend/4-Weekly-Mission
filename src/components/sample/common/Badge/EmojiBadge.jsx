import React from 'react';
import styles from './BadgeDesign.module.scss';

// emoji, count
function EmojiBadge({ emoji, count }) {
  return (
    <div className={styles.badge}>
      <div className={styles.badge_emoji}>
        <div className={styles.ic}>{emoji}</div>
        <div className={styles.img_text}>{count}</div>
      </div>
    </div>
  );
}

export default EmojiBadge;
