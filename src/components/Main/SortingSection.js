import classNames from 'classnames';
import { useState } from 'react';

import DeleteIcon from 'assets/images/delete.svg';
import PenIcon from 'assets/images/pen.svg';
import ShareIcon from 'assets/images/share.svg';

import useFetch from 'hooks/useFetch';

import AddFolderButton from 'components/Common/AddFolderButton';
import ErrorMessage from 'components/Common/ErrorMessage';
import Option from 'components/Common/Option';
import SortingButton from 'components/Common/SortingButton';
import styles from 'components/Main/SortingSection.module.css';

import { getFoldersApiUrl } from 'services/api';

function SortingButtonList() {
  const ALL_ID = 'all';
  const LOADING_MESSAGE = 'Loading...';

  const url = getFoldersApiUrl();
  const { data, loading, error } = useFetch(url);

  // {id, created_at, name, user_id, favorite, link: {count}}
  const folderList = [{ id: 'all', name: '전체' }, ...(data?.data ?? [])];

  console.log(folderList);

  const optionList = [
    { name: '공유', image: ShareIcon, key: 1 },
    { name: '이름 변경', image: PenIcon, key: 2 },
    { name: '삭제', image: DeleteIcon, key: 3 },
  ];

  const [selectedFolder, setSelectedFolder] = useState(folderList[0]);

  const handleButtonClick = (key) => {
    const targetButton = folderList.find((folder) => folder.id === key);
    setSelectedFolder(targetButton);
  };

  const sortingSectionClasses = classNames(
    styles['sorting-section'],
    'flex-row',
    'align-center',
    'justify-space-between'
  );
  const sortingButtonListClasses = classNames(styles['sorting-button-list'], 'display-inline-flex', 'flex-wrap');
  const selectedButtonStyle = classNames('background-primary', 'text-color-white');
  const addFolderButtonClasses = classNames(styles['add-folder-button'], 'hidden-flex-mobile-only');
  const folderInfoSectionClasses = classNames(styles['folder-info-section']);
  const titleClasses = classNames(styles.title);
  const optionListClasses = classNames(styles['option-list'], 'flex-row', 'align-center');

  return (
    <div>
      <div className={sortingSectionClasses}>
        <div className={sortingButtonListClasses}>
          {folderList.map((button) => (
            <SortingButton
              key={button.id}
              text={button.name}
              className={selectedFolder.id === button.id ? selectedButtonStyle : ''}
              onClick={() => handleButtonClick(button.id)}
            />
          ))}
          {loading && <ErrorMessage message={LOADING_MESSAGE} />}
          {error && <ErrorMessage message={error} />}
        </div>
        <AddFolderButton className={addFolderButtonClasses} />
      </div>
      <div className={folderInfoSectionClasses}>
        <p className={titleClasses}>{selectedFolder.name}</p>
        {selectedFolder.id !== ALL_ID && (
          <div className={optionListClasses}>
            {optionList.map((option) => (
              <Option key={option.key} text={option.name} imageUrl={option.image} className={optionListClasses} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SortingButtonList;
