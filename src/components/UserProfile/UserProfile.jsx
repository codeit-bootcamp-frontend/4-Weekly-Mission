import { DEFAULT_USER_IMAGE } from '../../constant/constant';
import { cn } from '../../utils/classNames';
import styles from './UserProfile.module.scss';

const UserProfile = ({ title, image, direction = 'row', size }) => {
  return (
    <section className={cn(styles.layout, styles[direction])}>
      <img className={cn(styles.userImage, styles[size])} src={image || DEFAULT_USER_IMAGE} alt='user' />
      <p>{title}</p>
    </section>
  );
};

export default UserProfile;
