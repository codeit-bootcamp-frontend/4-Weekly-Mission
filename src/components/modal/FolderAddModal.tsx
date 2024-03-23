import style from '../../styles/modal/FolderAddModal.module.css';

function FolderAddModal() {
  return (
    <div className={style.modalContentFlex}>
      <div className={style.modalTitle}>폴더 추가</div>
      <input className={style.modalInput} name="folderName" type="text" placeholder="내용 입력" />
      <button className={style.modalBtn}>추가하기</button>
    </div>
  );
}

export default FolderAddModal;
