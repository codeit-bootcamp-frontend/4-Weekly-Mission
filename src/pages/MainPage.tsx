import styles from './MainPage.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { Link } from 'react-router-dom';

const MainPage = () => {

  return (
    <main className={cn('temporary-main')}>
      <div className={cn('temporary-container')}>
        <Link to="/folder" className={cn('temporary', 'button-gradient')}>
          folder 페이지 바로가기
        </Link>
        <Link to="/shared" className={cn('temporary', 'button-gradient')}>
          shared 페이지 바로가기
        </Link>
      </div>
    </main>
  );
};

export default MainPage;