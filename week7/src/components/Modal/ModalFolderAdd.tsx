import "./ModalAdd.css";
import "./ModalEdit.css";

const ModalFolderAdd = () => {
  return (
    <div className="modal-edit-content">
      <input className="edit-input" placeholder="내용 입력"></input>
      <button className="edit-button">추가하기</button>
    </div>
  );
};

export default ModalFolderAdd;
