import style from '../../styles/modal/DeleteFolderModal.module.css';

function DeleteModal({ data }) {
  const { name } = data;

  return (
    <div className={style.modalContentFlex}>
      <div className={style.modalTitle}>폴더 삭제</div>
      <p className={style.modalData}>{name}</p>
      <button className={style.modalBtn}>삭제하기</button>
    </div>
  );
}

export default DeleteModal;
