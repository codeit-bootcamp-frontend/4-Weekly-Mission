import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { ROUTE, TEXT } from '@/utils/constant';
import Link from 'next/link';
import Image from 'next/image';
import { LegacyRef } from 'react';

type FooterType = {
  footerRef: LegacyRef<HTMLElement> | null;
};

const cx = classNames.bind(styles);

const Footer = ({ footerRef }: FooterType) => {
  return (
    <footer className={cx('container')} ref={footerRef}>
      <div className={cx('items')}>
        <span className={cx('copyright')}>{TEXT.codeit}</span>
        <div className={cx('links')}>
          <Link className={cx('link')} href={ROUTE.개인정보처리방침}>
            {TEXT.privacyPolicy}
          </Link>
          <Link className={cx('link')} href={ROUTE.FAQ}>
            {TEXT.faq}
          </Link>
        </div>
        <div className={cx('sns')}>
          <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="images/facebookLogo.svg"
              alt="facebook 홈페이지로 연결된 facebook 로고"
              width={20}
              height={20}
            />
          </Link>
          <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="images/twitterLogo.svg"
              alt="twitter 홈페이지로 연결된 twitter 로고"
              width={20}
              height={20}
            />
          </Link>
          <Link href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="images/youtubeLogo.svg"
              alt="youtube 홈페이지로 연결된 youtube 로고"
              width={20}
              height={20}
            />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="images/instagramLogo.svg"
              alt="instagram 홈페이지로 연결된 instagram 로고"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
