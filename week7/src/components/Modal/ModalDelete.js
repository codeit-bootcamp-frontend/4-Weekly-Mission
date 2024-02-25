import "./ModalDelete.css";

const ModalDelete = ({ link }) => {
  return (
    <div className="modal-delete-content">
      <div className="delete-area">{link}</div>
      <button className="delete-button">삭제하기</button>
    </div>
  );
};

export default ModalDelete;
