import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';

type ProfileType = {
  profile: {
    profileImageSource?: string;
    email?: string;
  };
};

const cx = classNames.bind(styles);

const Profile = ({ profile }: ProfileType) => {
  return (
    <div className={cx('container')}>
      <div className={cx('image')}>
        {profile.profileImageSource ? (
          <Image fill src={profile.profileImageSource} alt="프로필 이미지" sizes="28px" />
        ) : null}
      </div>
      <span className={cx('email')}>{profile.email}</span>
    </div>
  );
};

export default Profile;
