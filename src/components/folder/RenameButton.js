import { useState } from "react";
import rename from "../../images/pen.png";
import EditModal from "../modals/EditModal";

function RenameButton() {
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
        <img src={rename} />
        이름 변경
      </button>
      {modalOn && (
        <EditModal purpose={"폴더 이름 변경"} handleModalOff={handleModalOff} />
      )}
    </>
  );
}
export default RenameButton;
