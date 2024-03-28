import styles from './Layout.module.scss';
import classNames from 'classnames/bind';
import { useGetUser } from '@/apis/useGetUser';
import Footer from '@/components/footer/Footer';
import NavigationBar from '@/components/navigationBar/NavigationBar';
import { LegacyRef } from 'react';

type LayoutType = {
  children: React.ReactNode;
  footerRef: LegacyRef<HTMLElement> | null;
  isSticky: boolean;
};

interface Data {
  email?: string;
  profileImageSource?: string;
}

const cx = classNames.bind(styles);

const Layout = ({ children, footerRef, isSticky = true }: LayoutType) => {
  const { data } = useGetUser();
  const { email, profileImageSource }: Data = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx('main')}>{children}</main>
      <Footer footerRef={footerRef} />
    </div>
  );
};

export default Layout;
