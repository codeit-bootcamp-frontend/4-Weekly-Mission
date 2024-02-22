import classNames from 'classnames';

import AddLinkBar from 'components/Header/AddLinkBar';

import styles from './FolderHeaderContent.module.css';

function FolderHeaderContent() {
  const contentClasses = classNames(styles['header-content'], 'margin-auto');
  return (
    <div className={contentClasses}>
      <AddLinkBar />
    </div>
  );
}

export default FolderHeaderContent;
