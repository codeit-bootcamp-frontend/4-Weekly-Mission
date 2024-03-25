import styles from './FolderContent.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

const FolderContent = ({ children }) => {
  return (
    <main className={cn('folder-content')}>
      {children}
    </main>
  );
};

export default FolderContent;
