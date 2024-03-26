import React from 'react';
import shareImg from '../../../../images/share.svg';
import renameImg from '../../../../images/rename.svg';
import deleteImg from '../../../../images/delete.svg';
import styles from './FolderTitle.module.scss';

export const FolderTitle = ({ currentCategory }) => {
  return (
    <div className={styles.titleWrapper}>
      <p className={styles.categoryName}>{currentCategory}</p>
      {currentCategory !== '전체' && (
        <div className={styles.folderOptionWrapper}>
          <div className={styles.optionBtnWrapper}>
            <img
              className={styles.optionBtnImg}
              src={shareImg}
              alt="shareImg"
            />
            <p className={styles.optionBtnText}>공유</p>
          </div>
          <div className={styles.optionBtnWrapper}>
            <img
              className={styles.optionBtnImg}
              src={renameImg}
              alt="renameImg"
            />
            <p className={styles.optionBtnText}>이름 변경</p>
          </div>
          <div className={styles.optionBtnWrapper}>
            <img
              className={styles.optionBtnImg}
              src={deleteImg}
              alt="deleteImg"
            />
            <p className={styles.optionBtnText}>삭제</p>
          </div>
        </div>
      )}
    </div>
  );
};
