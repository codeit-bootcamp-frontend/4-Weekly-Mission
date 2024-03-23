//import { useFavoriteList } from "../../hooks/useFavoriteList";
import shared from "../../assets/image/share.svg";
import pen from "../../assets/image/pen.svg";
import deleteIcon from "../../assets/image/delete.svg";
import "./titlebar.css";
import { AlertModal } from "../modal/alert-modal/AlertModal";
import { MODALS_ID } from "./constant";
import { InputModal } from "../modal/input-modal/InputModal";
import { useState } from "react";
import { ShareModal } from "../modal/share-modal/ShareModal";

export const TitleBar = ({ selectItem }) => {
  // const [open, setOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  const handleClick = (id) => {
    setCurrentModal(id);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const closeModal = () => {
    setCurrentModal(null);
  };

  return (
    <div className="titlebar-container">
      <div>
        <h2>{selectItem?.name ?? "전체"}</h2>
      </div>
      <div className="titlebar-menu">
        <div onClick={() => handleClick(MODALS_ID.share)}>
          <img src={shared} alt="" />
          공유
        </div>
        <div onClick={() => handleClick(MODALS_ID.rename)}>
          <img src={pen} alt="" />
          이름 변경
        </div>
        <div onClick={() => handleClick(MODALS_ID.delete)}>
          <img src={deleteIcon} alt="" />
          삭제
        </div>
      </div>

      <ShareModal
        isOpen={currentModal === MODALS_ID.share}
        title="폴더 공유"
        description={selectItem?.name}
        // onKakaoClick={handleKakaoClick}
        //       onFacebookClick={handleFacebookClick}
        //       onLinkCopyClick={handleLinkCopyClick}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />
      <InputModal
        isOpen={currentModal === MODALS_ID.rename}
        title="폴더 이름 변경"
        placeholder="내용 입력"
        buttonText="변경하기"
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />
      <AlertModal
        isOpen={currentModal === MODALS_ID.delete}
        title="폴더 삭제"
        description={selectItem?.name}
        buttonText="삭제하기"
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
