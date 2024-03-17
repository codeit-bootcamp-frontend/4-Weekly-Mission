import React from 'react';
import RelationBadge from '../Badge/RelationBadge ';
import ProfileImage from '../ProfileImage';
import styles from './profile.module.scss';

function Profile({ profileImageURL, sender, relationship, font }) {
  return (
    <div className={styles.profile}>
      <ProfileImage url={profileImageURL} width="56px" height="56px" />
      <div className={styles.information}>
        <div className={styles.sender}>
          <span className={styles.from} style={{ fontFamily: font }}>
            From.
          </span>
          <span className={styles.name} style={{ fontFamily: font }}>
            {sender}
          </span>
        </div>
        <RelationBadge relationship={relationship} />
      </div>
    </div>
  );
}
export default Profile;
