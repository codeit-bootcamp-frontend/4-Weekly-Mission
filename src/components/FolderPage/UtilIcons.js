import penIcon from "../../assets/pen.svg";
import shareIcon from "../../assets/share.svg";
import deleteIcon from "../../assets/delete.svg";
import "./UtilIcons.css";
import ModalShare from "../Modal/ModalShare";
import ModalEdit from "../Modal/ModalEdit";
import useModal from "../../hooks/useModal";
import React from "react";
import ModalDeleteFolder from "../Modal/ModalDeleteFolder";

const utilIconsData = [
  {
    icon: shareIcon,
    label: "공유",
    modalComponent: <ModalShare />,
  },
  {
    icon: penIcon,
    label: "이름 변경",
    modalComponent: <ModalEdit />,
  },
  {
    icon: deleteIcon,
    label: "삭제",
    modalComponent: <ModalDeleteFolder />,
  },
];

const UtilIcon = ({ icon, label, modalComponent }) => {
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

const UtilIcons = ({ selectedFolderName, selectedFolderId }) => {
  return (
    <div className="utilContainer">
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

export default UtilIcons;
