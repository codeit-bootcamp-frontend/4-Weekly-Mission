import { useState } from 'react';
import { styled } from 'styled-components';

import IconLabelButton from 'components/common/button/IconLabelButton';

import shareIcon from 'assets/icon/share-icon.svg';
import strokeIcon from 'assets/icon/stroke-icon.svg';
import deleteIcon from 'assets/icon/delete-icon.svg';
import FolderShareModal from './modal/FolderShareModal';
import InputFormModal from './modal/InputFormModal';
import DeleteItemModal from './modal/DeleteItemModal';

const Styled = {
  Container: styled.div`
    display: flex;
    gap: 1.2rem;
  `,
};

const options = [
  { icon: shareIcon, label: '공유', modal: 'share' },
  { icon: strokeIcon, label: '이름 변경', modal: 'rename' },
  { icon: deleteIcon, label: '삭제', modal: 'delete' },
];

function OptionBtns() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleButtonClick = (modal) => {
    switch (modal) {
      case 'share':
        setIsShareModalOpen(true);
        break;
      case 'rename':
        setIsRenameModalOpen(true);
        break;
      case 'delete':
        setIsDeleteModalOpen(true);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (changedName) => {
    console.log(`${changedName}으로 폴더명이 변경되었습니다!`);
  };

  return (
    <>
      <Styled.Container>
        {options.map((option, index) => (
          <IconLabelButton
            key={index}
            icon={option.icon}
            label={option.label}
            onClick={() => handleButtonClick(option.modal)}
          />
        ))}
      </Styled.Container>
      {isShareModalOpen && <FolderShareModal setOpen={setIsShareModalOpen} item={3} />}
      {isRenameModalOpen && (
        <InputFormModal
          setOpen={setIsRenameModalOpen}
          onSubmit={handleFormSubmit}
          modalTitle="폴더 이름 변경"
          buttonLabel="변경하기"
          item={3}
        />
      )}
      {isDeleteModalOpen && <DeleteItemModal setOpen={setIsDeleteModalOpen} item={3} />}
    </>
  );
}

export default OptionBtns;
