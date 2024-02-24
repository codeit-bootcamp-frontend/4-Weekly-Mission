import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';

import CheckIcon from 'assets/images/check.svg';

import useFetch from 'hooks/useFetch';

import AddFolderList from 'components/Common/AddFolderList';
import ModalButton from 'components/Common/ModalButton';
import styles from 'components/Modal/AddToFolderModal.module.css';
import ModalContainer from 'components/Modal/ModalContainer';

import { FOLDERS_API_URL } from 'services/api';

function AddToFolderModal({ linkUrl }) {
  const LOADING_MESSAGE = 'Loading...';
  const foldersUrl = FOLDERS_API_URL;
  const { data, loading, error } = useFetch(foldersUrl);

  // {id, created_at, name, user_id, favorite, link: {count}}
  const folderList = data?.data ?? [];

  const [selectedFolder, setSelectedFolder] = useState(null);
  const [hoveredFolder, setHoveredFolder] = useState(null);

  const handleButtonClick = () => {
    console.log('폴더에 추가');
  };

  const titleClasses = classNames(styles.title, 'text-color-gray100', 'text-center');
  const linkClasses = classNames(styles.link, 'text-color-gray60', 'text-center');
  const listContainerClasses = classNames(styles['list-container'], 'flex-col', 'width: full');
  const addFolderListClasses = classNames(
    styles['add-folder-list'],
    'flex-row',
    'align-center',
    'justify-space-between',
    'width-full'
  );
  const textContainerClasses = classNames('flex-row', 'align-center');
  const folderNameClasses = classNames(styles['folder-name'], 'text-color-gray100');
  const linkCountClasses = classNames(styles['link-count'], 'text-color-gray60');
  const CheckIconClasses = classNames(styles['check-icon']);
  const buttonClasses = classNames('background-gra-primary', 'width-full');

  const hoveredAddFolderListClasses = classNames('background-bg');
  const selectedAddFolderListClasses = classNames('background-bg');
  const selectedFolderNameClasses = classNames('text-color-primary');
  const noneSelectedCheckIconClasses = classNames('display-none');

  const handleListClick = (key) => {
    const targetFolder = folderList.find((folder) => folder.id === key);
    setSelectedFolder(targetFolder);
  };

  const handleListMouseEnter = (key) => {
    const targetFolder = folderList.find((folder) => folder.id === key);
    setHoveredFolder(targetFolder);
  };

  const handleListMouseLeave = () => {
    setHoveredFolder(null);
  };

  return (
    <ModalContainer>
      <p className={titleClasses}>폴더에 추가</p>
      <p className={linkClasses}>{linkUrl || '링크 주소'}</p>
      <div className={listContainerClasses}>
        {folderList.map((folder) => (
          <AddFolderList
            key={folder.id}
            className={`${addFolderListClasses}
              ${
                selectedFolder?.id === folder.id
                  ? selectedAddFolderListClasses
                  : hoveredFolder?.id === folder.id
                    ? hoveredAddFolderListClasses
                    : ''
              }`}
            folder={folder}
            onClick={() => handleListClick(folder.id)}
            onMouseEnter={() => handleListMouseEnter(folder.id)}
            onMouseLeave={handleListMouseLeave}
          >
            <div className={textContainerClasses}>
              <div
                className={`${folderNameClasses} ${selectedFolder?.id === folder.id ? selectedFolderNameClasses : ''}`}
              >
                {folder.name}
              </div>
              <div className={linkCountClasses}>{folder?.link?.count ?? 0}개 링크</div>
            </div>
            <div
              className={`${CheckIconClasses} ${selectedFolder?.id !== folder.id ? noneSelectedCheckIconClasses : ''}`}
            >
              <img src={CheckIcon} alt="check-icon" />
            </div>
          </AddFolderList>
        ))}
      </div>
      {loading && <div>{LOADING_MESSAGE}</div>}
      {error && <div>{error}</div>}
      <ModalButton className={buttonClasses} text="추가하기" onClick={handleButtonClick} />
    </ModalContainer>
  );
}

AddToFolderModal.propTypes = {
  linkUrl: PropTypes.string,
};

AddToFolderModal.defaultProps = {
  linkUrl: '',
};

export default AddToFolderModal;
