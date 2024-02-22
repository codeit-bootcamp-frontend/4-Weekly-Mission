import penIcon from "../../assets/pen.svg";
import shareIcon from "../../assets/share.svg";
import deleteIcon from "../../assets/delete.svg";
import "./UtilIcons.css";
import ModalShare from "../Modal/ModalShare";
import ModalEdit from "../Modal/ModalEdit";
import useModal from "../../hooks/useModal";
import React from "react";
import ModalDeleteFolder from "../Modal/ModalDeleteFolder";

const UtilIcon = ({ icon, label, modalComponent }) => {
  const { showModal, handleOpenModal, handleCloseModal } = useModal();
  return (
    <div>
      <img src={icon} alt={`${label} 아이콘`} onClick={handleOpenModal} />
      {label}
      {showModal &&
        React.cloneElement(modalComponent, {
          isOpen: showModal,
          onClose: handleCloseModal,
        })}
    </div>
  );
};

const UtilIcons = () => {
  return (
    <div className="utilContainer">
      <UtilIcon icon={shareIcon} label="공유" modalComponent={<ModalShare />} />
      <UtilIcon
        icon={penIcon}
        label="이름 변경"
        modalComponent={<ModalEdit />}
      />
      <UtilIcon
        icon={deleteIcon}
        label="삭제"
        modalComponent={<ModalDeleteFolder />}
      />
    </div>
  );
};

export default UtilIcons;
