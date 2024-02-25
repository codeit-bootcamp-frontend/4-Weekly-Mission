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

function AddToFolderModal({ link, isModalOpen, setIsModalOpen }) {
  const LOADING_MESSAGE = 'Loading...';
  const foldersUrl = FOLDERS_API_URL;
  const { data, loading, error } = useFetch(foldersUrl);

  // {created_at, description, folder_id, id, image_source, title, updated_at, url}
  const { url } = link;

  // {id, created_at, name, user_id, favorite, link: {count}}
  const folderList = data?.data ?? [];

  const [selectedFolder, setSelectedFolder] = useState(null);
  const [hoveredFolder, setHoveredFolder] = useState(null);

  const resetSelectedFolder = () => {
    setSelectedFolder(null);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    console.log('폴더에 추가');
  };

  const handleListClick = (e, key) => {
    e.stopPropagation();
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

  const titleClasses = classNames(styles.title, 'text-color-gray100', 'text-center');
  const linkClasses = classNames(styles.link, 'text-color-gray60', 'text-center');
  const listContainerClasses = classNames(styles['list-container'], 'flex-col', 'width: full');
  const addFolderListClasses = classNames(
    styles['add-folder-list'],
    'flex-row',
    'align-center',
    'justify-space-between',
    'width-full',
    'cursor-pointer'
  );
  const textContainerClasses = classNames('flex-row', 'align-center');
  const folderNameClasses = classNames(styles['folder-name']);
  const linkCountClasses = classNames(styles['link-count'], 'text-color-gray60');
  const CheckIconClasses = classNames(styles['check-icon']);
  const buttonClasses = classNames('background-gra-primary', 'width-full');

  const selectedAddFolderListClasses = classNames('background-bg');
  const hoveredAddFolderListClasses = classNames('background-bg');
  const defaultAddFolderListClasses = classNames('background-white');

  const selectedFolderNameClasses = classNames('text-color-primary');
  const defaultFolderNameClasses = classNames('text-color-gray100');

  const selectedCheckIconClasses = classNames('display-block');
  const defaultCheckIconClasses = classNames('display-none');

  return (
    <ModalContainer isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} onClose={resetSelectedFolder}>
      <p className={titleClasses}>폴더에 추가</p>
      <p className={linkClasses}>{url || '링크 주소'}</p>
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
                    : defaultAddFolderListClasses
              }`}
            folder={folder}
            onClick={(e) => handleListClick(e, folder.id)}
            onMouseEnter={() => handleListMouseEnter(folder.id)}
            onMouseLeave={handleListMouseLeave}
          >
            <div className={textContainerClasses}>
              <div
                className={`${folderNameClasses} 
                ${selectedFolder?.id === folder.id ? selectedFolderNameClasses : defaultFolderNameClasses}`}
              >
                {folder.name}
              </div>
              <div className={linkCountClasses}>{folder?.link?.count ?? 0}개 링크</div>
            </div>
            <div
              className={`${CheckIconClasses} 
              ${selectedFolder?.id === folder.id ? selectedCheckIconClasses : defaultCheckIconClasses}`}
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
  link: PropTypes.shape({ url: PropTypes.string }),
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
};

AddToFolderModal.defaultProps = {
  link: { url: null },
  isModalOpen: false,
  setIsModalOpen: null,
};

export default AddToFolderModal;
