import { DEFAULT_USER_IMAGE } from '../../constant/constant';

import styles from './UserProfile.module.scss';

const UserProfile = ({ title, image, direction = 'row' }) => {
  return (
    <section className={`${styles[direction + 'Section']}`}>
      <img
        className={styles.userImage}
        style={{ width: image.size || '5rem' }}
        src={image.URL || DEFAULT_USER_IMAGE}
        alt='user'
      />
      <p>{title}</p>
    </section>
  );
};

export default UserProfile;
