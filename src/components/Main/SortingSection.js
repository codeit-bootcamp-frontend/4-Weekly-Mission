import classNames from 'classnames';
import PropTypes from 'prop-types';

import DeleteIcon from 'assets/images/delete.svg';
import PenIcon from 'assets/images/pen.svg';
import ShareIcon from 'assets/images/share.svg';

import useFetch from 'hooks/useFetch';

import AddFolderButton from 'components/Common/AddFolderButton';
import ErrorMessage from 'components/Common/ErrorMessage';
import Option from 'components/Common/Option';
import SortingButton from 'components/Common/SortingButton';
import styles from 'components/Main/SortingSection.module.css';

import { getFoldersApiUrl, getAllLinksApiUrl } from 'services/api';

function SortingSection({ selectedFolder, setSelectedFolder }) {
  const LOADING_MESSAGE = 'Loading...';
  const ALL_ID = 0;

  const url = getFoldersApiUrl();
  const { data, loading, error } = useFetch(url);

  // {id, created_at, name, user_id, favorite, link: {count}}
  const folderList = [{ id: 0, name: '전체' }, ...(data?.data ?? [])];

  // 총 링크 수 계산
  const allLinkUrl = getAllLinksApiUrl();
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
      {linkCount > 0 && (
        <div>
          <div className={sortingSectionClasses}>
            <div className={sortingButtonListClasses}>
              {folderList.map((folder) => (
                <SortingButton
                  key={folder.id}
                  text={folder.name}
                  className={selectedFolder.id === folder.id ? selectedButtonStyle : ''}
                  onClick={() => handleButtonClick(folder.id)}
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
      )}
    </div>
  );
}

SortingSection.propTypes = {
  selectedFolder: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.shape({
      count: PropTypes.number,
    }),
  }),
  setSelectedFolder: PropTypes.func,
};

SortingSection.defaultProps = {
  selectedFolder: { id: 0, name: '' },
  setSelectedFolder: null,
};

export default SortingSection;
