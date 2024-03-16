import React from 'react';
import styles from './index.module.scss';

function ProfileImage({ url, width, height }) {
  return (
    <div className={styles.profileImg}>
      <img src={url} alt="Profile" width={width} height={height} />
    </div>
  );
}

export default ProfileImage;
