import styles from "./AddLinkInput.module.css";
import AddLinkButton from "./AddLinkButton";
function AddLinkInput() {
  return (
    <>
      <div className={styles.add_link_input_wrapper}>
        <input
          className={styles.add_link_input}
          placeholder="링크를 추가해 보세요"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/add_link_input_icon.svg`}
          alt="add_link_input_icon"
          className={styles.add_link_input_icon}
        />
        <AddLinkButton />
      </div>
    </>
  );
}

export default AddLinkInput;
