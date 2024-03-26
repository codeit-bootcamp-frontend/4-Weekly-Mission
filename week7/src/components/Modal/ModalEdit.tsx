import "./ModalEdit.css";

const ModalEdit = () => {
  return (
    <div className="modal-edit-content">
      <input className="edit-input" placeholder="내용 입력"></input>
      <button className="edit-button">변경/추가하기</button>
    </div>
  );
};

export default ModalEdit;
