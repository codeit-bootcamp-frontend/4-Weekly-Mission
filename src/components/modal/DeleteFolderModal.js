import closeIcon from '../../assets/icons/close.svg';

const DeleteFolderModal = ({ data, closeModal }) => {
  return (
    <>
      <div className="modal-box-text">
        <h2 className="modal-title">폴더 삭제</h2>
        <h3 className="modal-sub-text">{data.name}</h3>
      </div>
      <button className="modal-button red">삭제하기</button>
      <button className="modal-close" onClick={closeModal}>
        <img src={closeIcon} />
      </button>
    </>
  );
};
export default DeleteFolderModal;
