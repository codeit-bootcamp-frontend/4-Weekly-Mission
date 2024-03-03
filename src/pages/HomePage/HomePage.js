import classNames from 'classnames';
import { Link } from 'react-router-dom';

import Button from 'components/Common/Button';

import styles from 'pages/HomePage/HomePage.module.css';

import scrollToTop from 'utils/scrollToTop';

function HomePage() {
  const containerClasses = classNames(styles.container, 'flex-col', 'align-center', 'position-absolute');
  const linkSharedPageButtonClasses = classNames(styles.button, 'background-red', 'text-color-white', 'border-none');
  const linkFolderPageButtonClasses = classNames(
    styles.button,
    'background-primary',
    'text-color-white',
    'border-none'
  );
  return (
    <div className={containerClasses}>
      <Link to="/shared" onClick={scrollToTop}>
        <Button className={linkSharedPageButtonClasses}>SharedPage</Button>
      </Link>
      <Link to="/folder" onClick={scrollToTop}>
        <Button className={linkFolderPageButtonClasses}>FolderPage</Button>
      </Link>
    </div>
  );
}

export default HomePage;
