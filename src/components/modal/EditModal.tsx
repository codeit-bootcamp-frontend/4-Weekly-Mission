import style from '../../styles/modal/EditModal.module.css';

function EditModal() {
  return (
    <div className={style.modalContentFlex}>
      <div className={style.modalTitle}>폴더 이름 변경</div>
      <input className={style.modalInput} name="folderName" type="text" placeholder="내용 입력" />
      <button className={style.modalBtn}>변경하기</button>
    </div>
  );
}

export default EditModal;
