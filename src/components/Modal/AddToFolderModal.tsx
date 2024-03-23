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

function AddToFolderModal({ link, onSubmit, onClose }) {
  const LOADING_MESSAGE = 'Loading...';
  const foldersUrl = FOLDERS_API_URL;
  const { data, loading, error } = useFetch(foldersUrl);

  // {created_at, description, folder_id, id, image_source, title, updated_at, url}
  const { url } = link;

  // {id, created_at, name, user_id, favorite, link: {count}}
  const folderList = data?.data ?? [];

  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleButtonClick = () => {
    if (!selectedFolder) {
      return null;
    }

    console.log('폴더에 추가');
    console.log(selectedFolder);
    onSubmit();
    setSelectedFolder(null);
    return null;
  };

  const handleListClick = (key) => {
    const targetFolder = folderList.find((folder) => folder.id === key);
    setSelectedFolder(targetFolder);
  };

  // classNames
  const titleClasses = classNames(styles.title, 'text-color-gray100', 'text-center');
  const linkClasses = classNames(styles.link, 'text-color-gray60', 'text-center');
  const listContainerClasses = classNames(styles['list-container'], 'flex-col', 'width: full');
  const addFolderListClasses = classNames(styles['add-folder-list'], 'background-white');
  const textContainerClasses = classNames('flex-row', 'align-center');
  const folderNameClasses = classNames(styles['folder-name'], 'text-color-gray100');
  const linkCountClasses = classNames(styles['link-count'], 'text-color-gray60');
  const CheckIconClasses = classNames(styles['check-icon'], 'display-none');
  const buttonClasses = classNames('background-gra-primary', 'width-full');

  const selectedAddFolderListClasses = classNames(styles['add-folder-list'], 'background-bg');
  const selectedFolderNameClasses = classNames(styles['folder-name'], 'text-color-primary');
  const selectedCheckIconClasses = classNames(styles['check-icon'], 'display-block');

  return (
    <ModalContainer onClose={onClose}>
      <p className={titleClasses}>폴더에 추가</p>
      <p className={linkClasses}>{url}</p>
      <div className={listContainerClasses}>
        {folderList.map((folder) => (
          <AddFolderList
            key={folder.id}
            className={selectedFolder?.id === folder.id ? selectedAddFolderListClasses : addFolderListClasses}
            folder={folder}
            onClick={() => handleListClick(folder.id)}
          >
            <div className={textContainerClasses}>
              <div className={selectedFolder?.id === folder.id ? selectedFolderNameClasses : folderNameClasses}>
                {folder.name}
              </div>
              <div className={linkCountClasses}>{folder?.link?.count ?? 0}개 링크</div>
            </div>
            <div className={selectedFolder?.id === folder.id ? selectedCheckIconClasses : CheckIconClasses}>
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
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

AddToFolderModal.defaultProps = {
  link: { url: '링크 주소' },
};

export default AddToFolderModal;
