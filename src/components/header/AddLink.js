import styles from "./AddLink.module.css";
import AddLinkInput from "./AddLinkInput";

function AddLink() {
  return (
    <div className={styles.add_link_wrapper}>
      <AddLinkInput />
    </div>
  );
}

export default AddLink;
