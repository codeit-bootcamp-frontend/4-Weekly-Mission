import classNames from 'classnames';
import React from 'react';

import useModal from 'hooks/useModal';

import Button from 'components/Common/Button';
import styles from 'components/Common/SelectMenu.module.css';

import { modalList } from 'context/Modal';

import { LinkData } from 'services/api';

interface SelectMenuProps {
  className?: string;
  link: LinkData;
}

function SelectMenu({ className = '', link }: SelectMenuProps) {
  const { openModal } = useModal();

  const menuList = [
    {
      id: 'deleteLink',
      label: '삭제하기',
    },
    {
      id: 'addToFolder',
      label: '폴더에 추가',
    },
  ];

  const handleMenuClick = (e: React.MouseEvent, key: string) => {
    e.stopPropagation();

    console.log('MenuList');

    const handleDeleteLink = () => {
      console.log('handleDeleteLink');
    };

    const handleAddToFolder = () => {
      console.log('handleAddToFolder');
    };

    switch (key) {
      case 'deleteLink':
        openModal(modalList.DeleteLinkModal, { onSubmit: handleDeleteLink, link });
        break;
      case 'addToFolder':
        openModal(modalList.AddToForderModal, { onSubmit: handleAddToFolder, link });
        break;
      default:
        break;
    }
  };

  const menuContainerClasses = classNames(styles['menu-container'], 'background-white', className);
  const menuElementClasses = classNames(styles['menu-element'], 'text-center', 'border-none', 'width-full');

  return (
    <div>
      <div className={menuContainerClasses}>
        {menuList.map((menu) => (
          <Button
            key={menu.id}
            className={`${menuElementClasses} `}
            text={menu.label}
            onClick={(e: React.MouseEvent) => handleMenuClick(e, menu.id)}
          />
        ))}
      </div>
    </div>
  );
}
export default SelectMenu;
