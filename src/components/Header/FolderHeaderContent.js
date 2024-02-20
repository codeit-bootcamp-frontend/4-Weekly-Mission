import classNames from 'classnames';
import styles from './FolderHeaderContent.module.css';
import AddLinkBar from './AddLinkBar';

function FolderHeaderContent() {
  const contentClasses = classNames(styles['header-content'], 'margin-auto');
  return (
    <div className={contentClasses}>
      <AddLinkBar />
    </div>
  );
}

export default FolderHeaderContent;
