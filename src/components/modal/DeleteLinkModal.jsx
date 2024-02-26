import style from '../../styles/modal/DeleteFolderModal.module.css';

function DeleteModal({ data }) {
  const { url } = data;
  return (
    <div className={style.modalContentFlex}>
      <div className={style.modalTitle}>링크 삭제</div>
      <p className={style.modalData}>{url}</p>
      <button className={style.modalBtn}>삭제하기</button>
    </div>
  );
}

export default DeleteModal;
