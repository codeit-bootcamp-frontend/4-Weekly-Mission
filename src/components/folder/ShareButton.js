import { useState } from "react";
import share from "../../images/share.png";
import ShareModal from "../modals/ShareModal";

function ShareButton({ folderName, folderId }) {
  const [modalOn, setModalOn] = useState(false);
  function handleModalOn() {
    setModalOn(true);
  }
  function handleModalOff() {
    setModalOn(false);
  }
  return (
    <>
      <button onClick={handleModalOn} className="share-rename-delete-button">
        <img src={share} />
        공유
      </button>
      {modalOn && (
        <ShareModal
          purpose={"폴더 공유"}
          folderName={folderName}
          folderId={folderId}
          handleModalOff={handleModalOff}
        />
      )}
    </>
  );
}
export default ShareButton;
