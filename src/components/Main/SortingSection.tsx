import classNames from 'classnames';
import React from 'react';

import DeleteIcon from 'assets/images/delete.svg';
import PenIcon from 'assets/images/pen.svg';
import ShareIcon from 'assets/images/share.svg';

import useFetch from 'hooks/useFetch';
import useModal from 'hooks/useModal';

import AddFolderButton from 'components/Common/AddFolderButton';
import ErrorMessage from 'components/Common/ErrorMessage';
import Option from 'components/Common/Option';
import SortingButton from 'components/Common/SortingButton';
import styles from 'components/Main/SortingSection.module.css';

import { modalList } from 'context/Modal';

import { FOLDERS_API_URL, LINKS_API_URL, FolderApiResponse, LinksApiResponse } from 'services/api';

interface SortingSectionProps {
  selectedFolder: { id: number; name: string };
  setSelectedFolder: React.Dispatch<React.SetStateAction<{ id: number; name: string }>>;
}

function SortingSection({ selectedFolder, setSelectedFolder }: SortingSectionProps) {
  const LOADING_MESSAGE = 'Loading...';
  const ALL = { id: 0, name: '전체' };

  const { openModal } = useModal();

  const url = FOLDERS_API_URL;
  const { data, loading, error } = useFetch<FolderApiResponse>(url);

  // {id, created_at, name, user_id, favorite, link: {count}}
  const folderList = [ALL, ...(data?.data ?? [])];

  // 총 링크 수 계산
  const allLinkUrl = LINKS_API_URL;
  const { data: allLink } = useFetch<LinksApiResponse>(allLinkUrl);
  const linkCount = allLink?.data?.length ?? 0;

  // 옵션 리스트
  const optionList = [
    { name: '공유', image: ShareIcon, key: 'share' },
    { name: '이름 변경', image: PenIcon, key: 'editFolderName' },
    { name: '삭제', image: DeleteIcon, key: 'deleteFolder' },
  ];

  const handleSortingButtonClick = (key: number) => {
    const targetButton = folderList.find((folder) => folder.id === key);
    if (targetButton) {
      setSelectedFolder(targetButton);
    }
  };

  const handleAddFolderButtonClick = () => {
    console.log('AddForderModal');

    const handleAddFolder = () => {
      console.log('handleAddFolder');
    };

    openModal(modalList.AddForderModal, { onSubmit: handleAddFolder });
  };

  const handleOptionListClick = (key: string) => {
    console.log('OptionList');

    const handleEditFolderName = () => {
      console.log('handleEditFolderName');
    };

    const handleDeleteFolder = () => {
      console.log('handleDeleteFolderFolder');
    };

    switch (key) {
      case 'share':
        openModal(modalList.ShareModal, { folder: selectedFolder });
        break;
      case 'editFolderName':
        openModal(modalList.EditFolderNameModal, { onSubmit: handleEditFolderName, folder: selectedFolder });
        break;
      case 'deleteFolder':
        openModal(modalList.DeleteFolderModal, { onSubmit: handleDeleteFolder, folder: selectedFolder });
        break;
      default:
        break;
    }
  };

  const sortingSectionClasses = classNames(
    styles['sorting-section'],
    'flex-row',
    'align-center',
    'justify-space-between'
  );
  const sortingButtonListClasses = classNames(styles['sorting-button-list'], 'display-inline-flex', 'flex-wrap');
  const sortingButtonClasses = classNames(styles['sorting-button']);
  const addFolderButtonClasses = classNames(styles['add-folder-button'], 'hidden-flex-mobile-only');
  const folderInfoSectionClasses = classNames(styles['folder-info-section']);
  const titleClasses = classNames(styles.title);
  const optionListClasses = classNames(styles['option-list'], 'flex-row', 'align-center');

  const selectedButtonClasses = classNames('background-primary', 'text-color-white');

  return (
    <div>
      {linkCount > 0 && (
        <div>
          <div className={sortingSectionClasses}>
            <div className={sortingButtonListClasses}>
              {folderList.map((folder) => (
                <SortingButton
                  key={folder.id}
                  text={folder.name}
                  className={selectedFolder.id === folder.id ? selectedButtonClasses : sortingButtonClasses}
                  onClick={() => handleSortingButtonClick(folder.id)}
                />
              ))}
              {loading && <ErrorMessage message={LOADING_MESSAGE} />}
              {error && <ErrorMessage message={error} />}
            </div>
            <AddFolderButton className={addFolderButtonClasses} onClick={handleAddFolderButtonClick} />
          </div>
          <div className={folderInfoSectionClasses}>
            <p className={titleClasses}>{selectedFolder.name}</p>
            {selectedFolder.id !== ALL.id && (
              <div className={optionListClasses}>
                {optionList.map((option) => (
                  <Option
                    key={option.key}
                    text={option.name}
                    imageUrl={option.image}
                    className={optionListClasses}
                    onClick={() => handleOptionListClick(option.key)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SortingSection;
