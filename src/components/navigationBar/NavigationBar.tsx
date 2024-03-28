import styles from './NavigationBar.module.scss';
import classNames from 'classnames/bind';
import { ROUTE } from '@/utils/constant';
import Cta from '@/components/cta/Cta';
import Profile from '@/components/profile/Profile';
import { LOGO_IMAGE, TEXT } from '@/utils/constant';
import Link from 'next/link';
import Image from 'next/image';

type ProfileType = {
  profileImageSource?: string;
  email?: string;
};

type NavigationBarType = {
  profile: ProfileType | null;
  isSticky: boolean;
};

const cx = classNames.bind(styles);

const NavigationBar = ({ profile, isSticky }: NavigationBarType) => {
  return (
    <nav className={cx('container', { sticky: isSticky })}>
      <div className={cx('items')}>
        <Link href={ROUTE.랜딩}>
          <Image
            className={cx('logo')}
            src={LOGO_IMAGE}
            alt="Linkbrary 서비스 로고"
            width={133}
            height={24}
          />
        </Link>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <Link href={ROUTE.로그인}>
            <Cta>
              <span className={cx('signin')}>{TEXT.login}</span>
            </Cta>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
