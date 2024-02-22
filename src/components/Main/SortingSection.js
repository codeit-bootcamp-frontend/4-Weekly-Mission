import classNames from 'classnames';
import { useState } from 'react';

import DeleteIcon from 'assets/images/delete.svg';
import PenIcon from 'assets/images/pen.svg';
import ShareIcon from 'assets/images/share.svg';

import AddFolderButton from 'components/Common/AddFolderButton';
import Option from 'components/Common/Option';
import SortingButton from 'components/Common/SortingButton';
import styles from 'components/Main/SortingSection.module.css';

function SortingButtonList() {
  const ALL = '전체';

  const buttonList = [
    { name: '전체', key: '1' },
    { name: '⭐️ 즐겨찾기', key: '2' },
    { name: '코딩 팁', key: '3' },
    { name: '채용 사이트', key: '4' },
    { name: '유용한 글', key: '5' },
    { name: '나만의 장소', key: '6' },
  ];

  const optionList = [
    { name: '공유', image: ShareIcon, key: 1 },
    { name: '이름 변경', image: PenIcon, key: 2 },
    { name: '삭제', image: DeleteIcon, key: 3 },
  ];

  const [selectedButton, setSelectedButton] = useState(buttonList[0]);

  const handleButtonClick = (key) => {
    const targetButton = buttonList.find((button) => button.key === key);
    setSelectedButton(targetButton);
  };

  const sortingSectionClasses = classNames(styles['sorting-section'], 'flex-row', 'justify-space-between');
  const sortingButtonListClasses = classNames(styles['sorting-button-list'], 'display-inline-flex', 'flex-wrap');
  const selectedButtonStyle = classNames(styles['selected-button']);
  const addFolderButtonClasses = classNames(styles['add-folder-button'], 'hidden-flex-mobile-only');
  const folderInfoSectionClasses = classNames(styles['folder-info-section']);
  const titleClasses = classNames(styles.title);
  const optionListClasses = classNames(styles['option-list'], 'flex-row');

  return (
    <div>
      <div className={sortingSectionClasses}>
        <div className={sortingButtonListClasses}>
          {buttonList.map((button) => (
            <SortingButton
              key={button.key}
              text={button.name}
              className={selectedButton.key === button.key ? selectedButtonStyle : ''}
              onClick={() => handleButtonClick(button.key)}
            />
          ))}
        </div>
        <AddFolderButton className={addFolderButtonClasses} />
      </div>
      <div className={folderInfoSectionClasses}>
        <p className={titleClasses}>{selectedButton.name}</p>
        {selectedButton.name !== ALL && (
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
