import { useState } from "react";
import deleteimg from "../../images/delete.png";
import DeleteModal from "../modals/DeleteModal";

function DeleteButton({ folderName }) {
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
        <img src={deleteimg} />
        삭제
      </button>
      {modalOn && (
        <DeleteModal
          purpose={"폴더 삭제"}
          folderName={folderName}
          handleModalOff={handleModalOff}
        />
      )}
    </>
  );
}
export default DeleteButton;
