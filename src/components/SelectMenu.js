import { useState } from 'react';

import Modal from './Modal/Modal';
import './SelectMenu.css';

const SelectMenu = ({ folderLink }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [modalData, setModalData] = useState({
    title: '',
    btnName: '',
    message: '',
    hasInput: false,
    hasButton: false,
    isDelete: false,
    placeholder: '',
    hasLsit: false,
  });

  const menus = [
    {
      className: 'delete',
      menuName: '삭제하기',
      title: '폴더 삭제',
      btnName: '삭제하기',
      message: folderLink,
      hasInput: false,
      hasButton: true,
      isDelete: true,
    },
    {
      className: 'add',
      menuName: '폴더에 추가',
      title: '폴더에 추가',
      btnName: '추가하기',
      message: folderLink,
      placeholder: '내용 입력',
      hasInput: false,
      hasButton: true,
      isDelete: false,
      hasLsit: true,
    },
  ];

  const handleToggleModal = (selectedMenu) => {
    setToggleModal(!toggleModal);
    setModalData(selectedMenu);
  };

  const handleMenuClick = (e, selectedMenu) => {
    e.preventDefault();
    e.stopPropagation();
    handleToggleModal(selectedMenu);
  };

  return (
    <>
      <div className='select-menu'>
        {menus.map((menu) => (
          <div
            key={menu.className}
            className={`${menu.className}-content`}
            onClick={(e) => handleMenuClick(e, menu)}
          >
            {menu.menuName}
          </div>
        ))}
      </div>

      {toggleModal && (
        <Modal
          title={modalData.title}
          btnName={modalData.btnName}
          message={modalData.message}
          placeholder={modalData.placeholder}
          hasInput={modalData.hasInput}
          hasButton={modalData.hasButton}
          isDelete={modalData.isDelete}
          hasList={modalData.hasLsit}
          onClose={handleToggleModal}
        />
      )}
    </>
  );
};

export default SelectMenu;
