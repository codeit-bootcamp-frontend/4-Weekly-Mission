import classNames from 'classnames';
import PropTypes from 'prop-types';

import useModal from 'hooks/useModal';

import Button from 'components/Common/Button';
import styles from 'components/Common/SelectMenu.module.css';

import { modalList } from 'context/Modal';

function SelectMenu({ className, link }) {
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

  const handleMenuClick = (e, key) => {
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
        // modal = <DeleteLinkModal link={link} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />;
        openModal(modalList.DeleteLinkModal, { onSubmit: handleDeleteLink, link });
        break;
      case 'addToFolder':
        // modal = <AddToFolderModal link={link} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />;
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
            onClick={(e) => handleMenuClick(e, menu.id)}
          />
        ))}
      </div>
    </div>
  );
}

SelectMenu.propTypes = {
  className: PropTypes.string,
  link: PropTypes.shape(),
};

SelectMenu.defaultProps = {
  className: '',
  link: null,
};

export default SelectMenu;
