import React from 'react';
import { Link } from 'react-router-dom';
import { logoImg } from '../../../utils/imageImport';
import styles from './index.module.scss';

// <Header buttonOn={false} /> 이런식으로 사용
function Header({ buttonOn = true }) {
  return (
    <div className={styles.header}>
      <div className={styles.headerinside}>
        <Link to="/">
          <img className={styles.logo} src={logoImg} alt="로고 이미지" />
        </Link>
        {/* 버튼 컴포넌트 scss: 상민님 */}
        {/* 나중에 페이지 만들었을 때 아래 코드 사용 */}
        {/* 지금은 페이지 구성을 안해서 그런지 Link적용이 안됨 */}
        {/* {buttonOn && (
          <Link to="/post" className={styles.button}>
            롤링 페이퍼 만들기
          </Link>
        )} */}
      </div>
    </div>
  );
}

export default Header;
