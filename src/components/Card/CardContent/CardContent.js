import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getElapsedTime } from "../../../utils/getElapsedTime";
import { formatDate } from "../../../utils/formatDate";
import { useModal } from "../../../hooks/useModal";
import { DeleteLinkModal, AddLinkModal } from "../../Modal";
import "./CardContent.css";

export const CardContent = ({
  items,
  isZoomedIn,
  handlePreventLinkClick,
  linkUrl,
  folderList,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const {
    openModal: deleteOpenModal,
    modalRef: deleteModalRef,
    handleModalClose: deleteHandleModalClose,
    handleModalOpen: deleteHandleModalOpen,
  } = useModal();

  const {
    openModal: AddOpenModal,
    modalRef: AddModalRef,
    handleModalClose: AddHandleModalClose,
    handleModalOpen: AddHandleModalOpen,
  } = useModal();

  const location = useLocation();

  const isFolderPage = location.pathname === "/folder";
  const kebabClassName = isFolderPage
    ? "card-text-kebabIcon"
    : "none-card-text-kebabIcon";

  const { createdAt, created_at, description } = items;
  const createdAtValue = createdAt || created_at;
  const className = isZoomedIn ? "card-text card-text-hovered" : "card-text";

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className={className}>
      <div className="card-text-top">
        <p className="card-text-time-ago">{getElapsedTime(createdAtValue)}</p>
        <div
          className={kebabClassName}
          onClick={(e) => {
            handlePreventLinkClick(e);
            toggleOptions();
          }}
        ></div>
      </div>
      {showOptions && (
        <div className="card-options">
          <button
            className="card-options-deleteButton"
            onClick={(e) => {
              handlePreventLinkClick(e);
              deleteHandleModalOpen();
            }}
          >
            삭제하기
          </button>
          {deleteOpenModal && (
            <DeleteLinkModal
              handlePreventLinkClick={handlePreventLinkClick}
              linkUrl={linkUrl}
              openModal={deleteOpenModal}
              modalRef={deleteModalRef}
              handleModalClose={deleteHandleModalClose}
            />
          )}
          <button
            className="card-options-AddButton"
            onClick={(e) => {
              handlePreventLinkClick(e);
              AddHandleModalOpen();
            }}
          >
            폴더에 추가
          </button>
          {AddOpenModal && (
            <AddLinkModal
              handlePreventLinkClick={handlePreventLinkClick}
              linkUrl={linkUrl}
              folderList={folderList}
              openModal={AddOpenModal}
              modalRef={AddModalRef}
              handleModalClose={AddHandleModalClose}
            />
          )}
        </div>
      )}
      <p className="card-text-description">{description}</p>
      <p className="card-text-date">{formatDate(createdAtValue)}</p>
    </div>
  );
};
