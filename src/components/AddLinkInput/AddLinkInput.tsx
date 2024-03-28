import css from "./AddLinkInput.module.scss";

function AddLinkInput() {
  return (
    <div className={css.AddLinkInput}>
      <div className={css.inputContainer}>
        <input className={css.inputField} placeholder="링크를 추가해 보세요" />
        <button className={css.AddLinkBtn}>추가하기</button>
      </div>
    </div>
  );
}

export default AddLinkInput;
