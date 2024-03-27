import closeIcon from '../../assets/icons/close.svg';

interface Data {
  name: string;
}
interface DeleteFolderModalProps {
  data: Data;
  closeModal: () => void;
}

const DeleteFolderModal = ({ data, closeModal }: DeleteFolderModalProps) => {
  return (
    <>
      <div className="modal-box-text">
        <h2 className="modal-title">폴더 삭제</h2>
        <h3 className="modal-sub-text">{data.name}</h3>
      </div>
      <button className="modal-button red">삭제하기</button>
      <button className="modal-close" onClick={closeModal}>
        <img src={closeIcon} alt="close-icon" />
      </button>
    </>
  );
};
export default DeleteFolderModal;
