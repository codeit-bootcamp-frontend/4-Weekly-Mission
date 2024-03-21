import penIcon from '../../assets/pen.svg';
import shareIcon from '../../assets/share.svg';
import deleteIcon from '../../assets/delete.svg';
import './UtilIcons.css';
import ModalShare from '../Modal/ModalShare';
import ModalEdit from '../Modal/ModalEdit';
import useModal from '../../hooks/useModal';
import React, { ReactElement } from 'react';
import ModalDeleteFolder from '../Modal/ModalDeleteFolder';

interface UtilIconProps {
  icon: string;
  label: string;
  modalComponent: ReactElement;
}

interface UtilIconsProps {
  selectedFolderName: string;
  selectedFolderId: number;
}

const UtilIcon = ({ icon, label, modalComponent }: UtilIconProps) => {
  const { showModal, handleOpenModal, handleCloseModal } = useModal();
  return (
    <div>
      <div onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
        <img src={icon} alt={`${label} icon`} />
        {label}
      </div>
      {showModal &&
        React.cloneElement(modalComponent, {
          isOpen: showModal,
          onClose: handleCloseModal,
        })}
    </div>
  );
};

const UtilIcons = ({
  selectedFolderName,
  selectedFolderId,
}: UtilIconsProps) => {
  return (
    <div className='utilContainer'>
      {utilIconsData.map((iconData, index) => (
        <UtilIcon
          key={index}
          icon={iconData.icon}
          label={iconData.label}
          modalComponent={React.cloneElement(iconData.modalComponent, {
            selectedFolderName,
            selectedFolderId,
          })}
        />
      ))}
    </div>
  );
};

const utilIconsData: UtilIconProps[] = [
  {
    icon: shareIcon,
    label: '공유',
    modalComponent: (
      <ModalShare
        isOpen={false}
        onClose={() => {}}
        selectedFolderName=''
        selectedFolderId={0}
      />
    ),
  },
  {
    icon: penIcon,
    label: '이름 변경',
    modalComponent: (
      <ModalEdit isOpen={false} onClose={() => {}} selectedFolderName='' />
    ),
  },
  {
    icon: deleteIcon,
    label: '삭제',
    modalComponent: (
      <ModalDeleteFolder
        isOpen={false}
        onClose={() => {}}
        selectedFolderName=''
      />
    ),
  },
];

export default UtilIcons;
