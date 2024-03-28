import styles from "./AddLinkInput.module.css";
import linkIcon from "../../asset/images/link.svg";
import Button from "../Button/Button";

const AddLinkInput = ({ onSubmit }) => {
  return (
    <form className={styles.AddLinkInput} onSubmit={onSubmit}>
      <img src={linkIcon} alt="링크 아이콘" />
      <input type="text" placeholder="링크를 추가해 보세요" />
      <Button className={styles.button} type="submit">
        추가하기
      </Button>
    </form>
  );
};

export default AddLinkInput;
