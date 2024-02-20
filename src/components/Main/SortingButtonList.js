import { useState } from 'react';
import classNames from 'classnames';
import SortingButton from '../Common/SortingButton';
import styles from './SortingButtonList.module.css';

function SortingButtonList() {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttonList = [
    { name: '전체', key: '1' },
    { name: '⭐️ 즐겨찾기', key: '2' },
    { name: '코딩 팁', key: '3' },
    { name: '채용 사이트', key: '4' },
    { name: '유용한 글', key: '5' },
    { name: '나만의 장소', key: '6' },
  ];

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const sortingButtonListClasses = classNames(styles['sorting-button-list'], 'display-inline-flex', 'flex-wrap');
  const selectedButtonStyle = classNames('background-primary', 'text-color-white');

  return (
    <div className={sortingButtonListClasses}>
      {buttonList.map((button) => (
        <SortingButton
          key={button.key}
          text={button.name}
          className={selectedButton === button ? selectedButtonStyle : ''}
          onClick={handleButtonClick}
        />
      ))}
    </div>
  );
}

export default SortingButtonList;
