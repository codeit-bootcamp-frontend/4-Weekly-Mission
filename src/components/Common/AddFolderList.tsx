import classNames from 'classnames';
import React from 'react';

import styles from 'components/Common/AddFolderList.module.css';

interface AddFolderListProps {
  className?: string;
  children?: React.ReactNode;
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function AddFolderList({ className = '', children = null, onClick, onMouseEnter, onMouseLeave }: AddFolderListProps) {
  const handleClickByEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  const containerClasses = classNames(styles.container, 'flex-row', 'align-center', className);

  return (
    <div
      className={containerClasses}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={handleClickByEnter}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
}

export default AddFolderList;
