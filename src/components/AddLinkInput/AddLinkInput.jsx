import styles from "./AddLinkInput.module.css";
import linkIcon from "../../asset/images/link.svg";
import Button from "../Button/Button";

const AddLinkInput = () => {
  return (
    <div className={styles.AddLinkInput}>
      <img src={linkIcon} alt="링크 아이콘" />
      <input type="text" placeholder="링크를 추가해 보세요" />
      <Button>추가하기</Button>
    </div>
  );
};

export default AddLinkInput;
