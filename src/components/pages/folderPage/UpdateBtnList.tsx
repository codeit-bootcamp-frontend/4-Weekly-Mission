import styled from 'styled-components';
import { MouseEvent, useState } from 'react';
import iconShare from '../../../assets/share.svg';
import iconPen from '../../../assets/pen.svg';
import iconDelete from '../../../assets/delete.svg';
import { modalTypes } from '../../../util/constants';
import Share from '../../common/modal/Share';
import Edit from '../../common/modal/Edit';
import DeleteFolder from '../../common/modal/DeleteFolder';
import { FolderId } from '../../../types/types';

const ButtonList = [
  {
    modalName: 'share',
    name: '공유',
    imgUrl: iconShare,
  },
  {
    modalName: 'edit',
    name: '이름변경',
    imgUrl: iconPen,
  },
  {
    modalName: 'deleteFolder',
    name: '삭제',
    imgUrl: iconDelete,
  },
];

const UpdateButtonList = styled.ul`
  display: flex;
  gap: 1.2rem;
`;

const UpdateButton = styled.button`
  display: flex;
  gap: 0.4rem;
  line-height: 1.7rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-gray-600);
`;

const ButtonImg = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

interface UpdateBtnListProps {
  selectedFolderId: FolderId;
  selectedFolderName: string;
}

const UpdateBtnList = ({ selectedFolderId, selectedFolderName }: UpdateBtnListProps) => {
  const [showModal, setShowModal] = useState(false);
  const [activeModal, setActiveModal] = useState('');

  const handleBtnClick = (e: MouseEvent) => {
    e.preventDefault();
    setShowModal(true);

    // Error 'dataset' does not exist on type 'EventTarget'
    // Error 'string | undefined' 형식의 인수는 'SetStateAction<string>' 형식의 매개 변수에 할당될 수 없습니다.
    if (!(e.target instanceof HTMLButtonElement)) return;
    setActiveModal(e.target.dataset.modal || '');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveModal('');
  };

  return (
    <>
      <UpdateButtonList>
        {ButtonList.map(({ modalName, name, imgUrl }) => (
          <li key={name}>
            <UpdateButton data-modal={modalTypes[modalName]} onClick={handleBtnClick}>
              <ButtonImg src={imgUrl} alt={name} />
              {name}
            </UpdateButton>
          </li>
        ))}
      </UpdateButtonList>
      {showModal && activeModal === modalTypes.share && (
        <Share
          selectedFolderId={selectedFolderId}
          selectedFolderName={selectedFolderName}
          onCloseModal={handleCloseModal}
        />
      )}
      {showModal && activeModal === modalTypes.edit && (
        <Edit onCloseModal={handleCloseModal} selectedFolderName={selectedFolderName} />
      )}
      {showModal && activeModal === modalTypes.deleteFolder && (
        <DeleteFolder onCloseModal={handleCloseModal} selectedFolderName={selectedFolderName} />
      )}
    </>
  );
};
export default UpdateBtnList;
