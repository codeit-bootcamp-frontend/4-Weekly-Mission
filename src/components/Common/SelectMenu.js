import classNames from 'classnames';
import { useState } from 'react';

import Button from 'components/Common/Button';
import styles from 'components/Common/SelectMenu.module.css';

function SelectMenu() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menuList = [
    {
      id: 1,
      label: '삭제하기',
    },
    {
      id: 2,
      label: '폴더에 추가',
    },
  ];

  const handleMenuClick = (key) => {
    const targetMenu = menuList.find((menu) => menu.id === key);
    setSelectedMenu(targetMenu);
    console.log(targetMenu.label);
    console.log(selectedMenu);
  };

  const handleMenuMouseEnter = (key) => {
    const targetMenu = menuList.find((menu) => menu.id === key);
    setHoveredMenu(targetMenu);
  };

  const handleMenuMouseLeave = () => {
    setHoveredMenu(null);
  };

  const menuContainerClasses = classNames(styles['menu-container'], 'flex-col', 'background-white');
  const menuElementClasses = classNames(styles['menu-element'], 'text-center', 'border-none');

  const hoveredMenuClasses = classNames('background-bg', 'text-color-primary');
  const defaultMenuClasses = classNames('background-white', 'text-color-gray100');

  return (
    <div>
      <div className={menuContainerClasses}>
        {menuList.map((menu) => (
          <Button
            key={menu.id}
            className={`${menuElementClasses} 
            ${hoveredMenu?.id === menu.id ? hoveredMenuClasses : defaultMenuClasses}`}
            text={menu.label}
            onClick={() => handleMenuClick(menu.id)}
            onMouseEnter={() => handleMenuMouseEnter(menu.id)}
            onMouseLeave={handleMenuMouseLeave}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectMenu;
