import closeIcon from '../../assets/icons/close.svg';

const DeleteLinkModal = ({ data, closeModal }) => {
  const { link } = data;
  return (
    <>
      <div className="modal-box-text">
        <h2 className="modal-title">링크 삭제</h2>
        <h3 className="modal-sub-text">{link}</h3>
      </div>
      <button className="modal-button red">삭제하기</button>
      <button className="modal-close" onClick={closeModal}>
        <img src={closeIcon} />
      </button>
    </>
  );
};
export default DeleteLinkModal;
