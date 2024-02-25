import classNames from 'classnames';
import PropTypes from 'prop-types';
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

import { FOLDERS_API_URL, LINKS_API_URL } from 'services/api';

function SortingSection({ selectedFolder, setSelectedFolder }) {
  const LOADING_MESSAGE = 'Loading...';
  const ALL = { id: 0, name: '전체' };

  const [hoveredFolder, setHoveredFolder] = useState(null);

  const url = FOLDERS_API_URL;
  const { data, loading, error } = useFetch(url);

  // {id, created_at, name, user_id, favorite, link: {count}}
  const folderList = [ALL, ...(data?.data ?? [])];

  // 총 링크 수 계산
  const allLinkUrl = LINKS_API_URL;
  const { data: allLink } = useFetch(allLinkUrl);
  const linkCount = allLink?.data?.length ?? 0;

  // 옵션 리스트
  const optionList = [
    { name: '공유', image: ShareIcon, key: 1 },
    { name: '이름 변경', image: PenIcon, key: 2 },
    { name: '삭제', image: DeleteIcon, key: 3 },
  ];

  const handleButtonClick = (key) => {
    const targetButton = folderList.find((folder) => folder.id === key);
    setSelectedFolder(targetButton);
  };

  const handleButtonMouseEnter = (key) => {
    const targetButton = folderList.find((folder) => folder.id === key);
    setHoveredFolder(targetButton);
  };

  const handleButtonMouseLeave = () => {
    setHoveredFolder(null);
  };

  const sortingSectionClasses = classNames(
    styles['sorting-section'],
    'flex-row',
    'align-center',
    'justify-space-between'
  );
  const sortingButtonListClasses = classNames(styles['sorting-button-list'], 'display-inline-flex', 'flex-wrap');
  const addFolderButtonClasses = classNames(styles['add-folder-button'], 'hidden-flex-mobile-only');
  const folderInfoSectionClasses = classNames(styles['folder-info-section']);
  const titleClasses = classNames(styles.title);
  const optionListClasses = classNames(styles['option-list'], 'flex-row', 'align-center');

  const selectedButtonClasses = classNames('background-primary', 'text-color-white');
  const hoveredButtonClasses = classNames('background-gray10', 'text-color-true-black');
  const defaultButtonClasses = classNames('background-white', 'text-color-true-black');

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
                  className={
                    selectedFolder.id === folder.id
                      ? selectedButtonClasses
                      : hoveredFolder?.id === folder.id
                        ? hoveredButtonClasses
                        : defaultButtonClasses
                  }
                  onClick={() => handleButtonClick(folder.id)}
                  onMouseEnter={() => handleButtonMouseEnter(folder.id)}
                  onMouseLeave={handleButtonMouseLeave}
                />
              ))}
              {loading && <ErrorMessage message={LOADING_MESSAGE} />}
              {error && <ErrorMessage message={error} />}
            </div>
            <AddFolderButton className={addFolderButtonClasses} />
          </div>
          <div className={folderInfoSectionClasses}>
            <p className={titleClasses}>{selectedFolder.name}</p>
            {selectedFolder.id !== ALL.id && (
              <div className={optionListClasses}>
                {optionList.map((option) => (
                  <Option key={option.key} text={option.name} imageUrl={option.image} className={optionListClasses} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

SortingSection.propTypes = {
  selectedFolder: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  setSelectedFolder: PropTypes.func,
};

SortingSection.defaultProps = {
  selectedFolder: { id: 0, name: '전체' },
  setSelectedFolder: null,
};

export default SortingSection;
